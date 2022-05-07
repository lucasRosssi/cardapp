import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { EstablishmentDTO } from '../dtos/EstablishmentDTO';
import { UserDTO } from '../dtos/UserDTO';
import { api } from '../services/api';

interface SignInCredentials {
	email: string;
	password: string;
}

export interface IAuthContextData {
	user: UserDTO;
	company: EstablishmentDTO;
	authStatus: null | 'user' | 'company';

	createNewUser: (data: UserDTO) => Promise<void>;
	handleUpdateUser: (data: UserDTO) => void;
	handleUpdateCompany: (data: EstablishmentDTO) => void;

	signIn: (data: SignInCredentials) => Promise<void>;
	signOut: () => Promise<void>;
}

interface AuthContextProps {
	children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: AuthContextProps) {
	const [authStatus, setAuthStatus] =
		useState<IAuthContextData['authStatus']>(null);
	const [user, setUser] = useState<UserDTO>({} as UserDTO);
	const [company, setCompany] = useState<EstablishmentDTO>(
		{} as EstablishmentDTO
	);

	async function createNewUser(data: UserDTO) {
		try {
			const response = await api.get('/users');
			const users: UserDTO[] = response.data;

			const userAlreadyExists = users.find((user) => user.email === data.email);

			if (userAlreadyExists) {
				Alert.alert(
					'E-mail já cadastrado',
					'Já existe um usuários cadastrado com o e-mail informado!'
				);
				return;
			}

			await api.post('/users', data);

			setUser(data);
		} catch (error) {
			Alert.alert('Erro', 'Falha ao criar nova conta!');
			throw new Error('Failed to create a new user account');
		}
	}

	function handleUpdateUser(data: UserDTO) {
		setUser(data);
	}

	function handleUpdateCompany(data: EstablishmentDTO) {
		setCompany(data);
	}

	async function signIn({ email, password }: SignInCredentials) {
		try {
			const response = await api.get('/users');
			const usersList: UserDTO[] = response.data;
			const user = usersList.find((user) => user.email === email);

			setUser(user!);
		} catch (error) {
			Alert.alert('Erro', 'Falha ao fazer login!');
			throw new Error('Failed to sign in!');
		}
	}

	async function signOut() {
		setUser({} as UserDTO);
	}

	useEffect(() => {
		if (user.id) {
			setAuthStatus('user');
		}

		if (company.id) {
			setAuthStatus('company');
		}
		if (!user.id && !company.id) {
			setAuthStatus(null);
		}
	}, [user, company]);

	return (
		<AuthContext.Provider
			value={{
				user,
				company,
				authStatus,
				createNewUser,
				handleUpdateUser,
				handleUpdateCompany,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

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
	setUser: (user: UserDTO) => void;
	company: EstablishmentDTO;
	setCompany: (company: EstablishmentDTO) => void;
	authStatus: null | 'user' | 'company';

	createNewUser: (data: UserDTO) => Promise<void>;
	createNewCompany: (data: EstablishmentDTO) => Promise<void>;

	getCompanyData: (email: string) => Promise<EstablishmentDTO | undefined>;

	signInUser: (data: SignInCredentials) => Promise<void>;
	signInCompany: (data: SignInCredentials) => Promise<void>;
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
					'Já existe um usuário cadastrado com o e-mail informado!'
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

	async function createNewCompany(data: EstablishmentDTO) {
		try {
			await api.post('/establishments', data);

			setCompany(data);
		} catch (error: any) {
			Alert.alert('Erro', error.message);
		}
	}

	async function getCompanyData(email: string) {
		try {
			const { data }: { data: EstablishmentDTO[] } = await api.get(
				'/establishments'
			);
			const company = data.find((company) => company.email === email);

			return company;
		} catch (error) {}
	}

	async function signInUser({ email, password }: SignInCredentials) {
		try {
			const response = await api.get('/users');
			const usersList: UserDTO[] = response.data;
			const user = usersList.find((user) => user.email === email);

			if (user) {
				setUser(user);
			} else {
				Alert.alert('Cliente', 'Email e senha inválidos!');
			}
		} catch (error) {
			Alert.alert('Erro', 'Falha ao fazer login!');
			throw new Error('Failed to sign in!');
		}
	}

	async function signOut() {
		setUser({} as UserDTO);
		setCompany({} as EstablishmentDTO);
	}

	async function signInCompany({ email, password }: SignInCredentials) {
		try {
			const response = await api.get('/establishments');
			const establishmentsList: EstablishmentDTO[] = response.data;
			const establishment = establishmentsList.find(
				(establishment) => establishment.email === email
			);

			if (establishment) {
				setCompany(establishment);
			} else {
				Alert.alert('Estabelecimento', 'Email e senha inválidos!');
			}
		} catch (error) {
			Alert.alert('Erro', 'Falha ao fazer login!');
			throw new Error('Failed to sign in!');
		}
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
				setUser,
				company,
				setCompany,
				authStatus,
				createNewUser,
				createNewCompany,
				getCompanyData,
				signInUser,
				signInCompany,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

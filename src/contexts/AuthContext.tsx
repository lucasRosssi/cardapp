import React, { createContext, ReactNode, useState } from 'react';
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

	handleUpdateUser: (data: UserDTO) => void;
	handleUpdateCompany: (data: EstablishmentDTO) => void;

	signIn: (data: SignInCredentials) => Promise<void>;
}

interface AuthContextProps {
	children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: AuthContextProps) {
	const [user, setUser] = useState<UserDTO>({
		id: '1',
		full_name: 'Lucas Rossi',
		first_name: 'Lucas',
		city: 'Niterói',
		picture: 'https://www.github.com/lucasRosssi.png',
	} as UserDTO);
	const [company, setCompany] = useState<EstablishmentDTO>({
		id: '2',
		name: 'The Cruise Bar',
		address: 'Rua da Atlântida, 234',
		picture:
			'https://galeriemagazine.com/wp-content/uploads/2020/01/MAIN_BG_Goodman_Environmental_Hero_0007_RT-1920x1200.jpg',
		email: 'thecruisebar@bar.com',
		phone: '2124246969',
		menu: [],
	} as EstablishmentDTO);

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

	return (
		<AuthContext.Provider
			value={{
				user,
				company,
				handleUpdateUser,
				handleUpdateCompany,
				signIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

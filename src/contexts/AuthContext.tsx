import React, { createContext, ReactNode, useState } from 'react';
import { EstablishmentDTO } from '../dtos/EstablishmentDTO';
import { UserDTO } from '../dtos/UserDTO';

export interface IAuthContextData {
	user: UserDTO;
	company: EstablishmentDTO;
	handleUpdateUser: (data: UserDTO) => void;
	handleUpdateCompany: (data: EstablishmentDTO) => void;
}

interface AuthContextProps {
	children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: AuthContextProps) {
	const [user, setUser] = useState<UserDTO>({
		full_name: 'Lucas Rossi',
		first_name: 'Lucas',
		city: 'Niterói',
		picture: 'https://www.github.com/lucasRosssi.png',
	} as UserDTO);
	const [company, setCompany] = useState<EstablishmentDTO>({
		id: '2',
		name: 'The Cruise Bar',
		address: '',
		picture:
			'https://galeriemagazine.com/wp-content/uploads/2020/01/MAIN_BG_Goodman_Environmental_Hero_0007_RT-1920x1200.jpg',
		contact: {
			email: 'thecruisebar@bar.com',
			phone: '2124246969',
		},
		menu: [],
	} as EstablishmentDTO);

	function handleUpdateUser(data: UserDTO) {
		setUser(data);
	}

	function handleUpdateCompany(data: EstablishmentDTO) {
		setCompany(data);
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				company,
				handleUpdateUser,
				handleUpdateCompany,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

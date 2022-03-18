import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface UserDTO {
	full_name: string;
	first_name: string;
	city: string;
	picture: string;
}

export interface IAuthContextData {
	user: UserDTO;
	handleUpdateUser: (data: UserDTO) => void;
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

	function handleUpdateUser(data: UserDTO) {
		setUser(data);
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				handleUpdateUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

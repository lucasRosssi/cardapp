import { useContext } from 'react';

import { AuthContext, IAuthContextData } from '../contexts/AuthContext';

export function useAuth(): IAuthContextData {
	const context = useContext(AuthContext);

	return context;
}

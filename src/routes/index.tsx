import React from 'react';
import { useAuth } from '../hooks/useAuth';

import { NavigationContainer } from '@react-navigation/native';
import { ClientStackRoutes } from './client/stack.routes';
import { CompanyStackRoutes } from './company/stack.routes';
import { AuthRoutes } from './auth/auth.routes';

export function Routes() {
	const { authStatus } = useAuth();

	function getRoute() {
		switch (authStatus) {
			case null:
				return <AuthRoutes />;
			case 'user':
				return <ClientStackRoutes />;
			case 'company':
				return <CompanyStackRoutes />;
		}
	}

	return <NavigationContainer>{getRoute()}</NavigationContainer>;
}

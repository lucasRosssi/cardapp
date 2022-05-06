import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ClientStackRoutes } from './client/stack.routes';
import { CompanyStackRoutes } from './company/stack.routes';
import { AuthRoutes } from './auth/auth.routes';

export function Routes() {
	return (
		<NavigationContainer>
			<AuthRoutes />
		</NavigationContainer>
	);
}

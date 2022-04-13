import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ClientStackRoutes } from './client/stack.routes';
import { CompanyStackRoutes } from './company/stack.routes';

export function Routes() {
	return (
		<NavigationContainer>
			<ClientStackRoutes />
		</NavigationContainer>
	);
}

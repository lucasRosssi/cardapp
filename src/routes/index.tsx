import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ClientTabRoutes } from './client/tab.routes';

export function Routes() {
	return (
		<NavigationContainer>
			<ClientTabRoutes />
		</NavigationContainer>
	);
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../../screens/auth/Login';

export type AuthParamList = {
	Login: undefined;
};

const { Navigator, Screen } = createStackNavigator<AuthParamList>();

export function AuthRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Login" component={Login} />
		</Navigator>
	);
}

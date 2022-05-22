import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../../screens/auth/Login';
import { Register } from '../../screens/auth/Register';

export type AuthParamList = {
	Login: undefined;
	Register: { isClient: boolean };
};

const { Navigator, Screen } = createStackNavigator<AuthParamList>();

export function AuthRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Login" component={Login} />
			<Screen name="Register" component={Register} />
		</Navigator>
	);
}

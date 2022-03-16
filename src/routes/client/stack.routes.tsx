import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DishesMenu } from '../../screens/client/DishesMenu';
import { Dashboard } from '../../screens/client/Dashboard';

export type RootStackParamList = {
	Dashboard: undefined;
	DishesMenu: undefined;
};

const { Navigator: StackNavigator, Screen: StackScreen } =
	createStackNavigator<RootStackParamList>();

export function ClientStackRoutes() {
	return (
		<StackNavigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Dashboard"
		>
			<StackScreen name="Dashboard" component={Dashboard} />

			<StackScreen name="DishesMenu" component={DishesMenu} />
		</StackNavigator>
	);
}

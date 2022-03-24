import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MenuDTO, DishDTO } from '../../dtos/EstablishmentDTO';

import { DishesMenu } from '../../screens/client/DishesMenu';
import { DishDetails } from '../../screens/client/DishDetails';
import { ClientTabRoutes } from './tab.routes';

export type RootStackParamList = {
	Home: undefined;
	DishesMenu: { name: string; menu: MenuDTO[] };
	DishDetails: DishDTO;
};

const { Navigator: StackNavigator, Screen: StackScreen } =
	createStackNavigator<RootStackParamList>();

export function ClientStackRoutes() {
	return (
		<StackNavigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Home"
		>
			<StackScreen name="Home" component={ClientTabRoutes} />

			<StackScreen name="DishesMenu" component={DishesMenu} />

			<StackScreen name="DishDetails" component={DishDetails} />
		</StackNavigator>
	);
}

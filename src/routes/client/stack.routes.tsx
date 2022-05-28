import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MenuDTO, DishDTO } from '../../dtos/EstablishmentDTO';

import { ClientDishesMenu } from '../../screens/client/ClientDishesMenu';
import {
	ClientDishDetails,
	ClientDishDetailsParams,
} from '../../screens/client/ClientDishDetails';
import { ClientTabRoutes } from './tab.routes';

export type ClientStackParamList = {
	ClientHome: undefined;
	ClientDishesMenu: { name: string; menu: MenuDTO[] };
	ClientDishDetails: ClientDishDetailsParams;
};

const { Navigator: StackNavigator, Screen: StackScreen } =
	createStackNavigator<ClientStackParamList>();

export function ClientStackRoutes() {
	return (
		<StackNavigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="ClientHome"
		>
			<StackScreen name="ClientHome" component={ClientTabRoutes} />

			<StackScreen name="ClientDishesMenu" component={ClientDishesMenu} />

			<StackScreen name="ClientDishDetails" component={ClientDishDetails} />
		</StackNavigator>
	);
}

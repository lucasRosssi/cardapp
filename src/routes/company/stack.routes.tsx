import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MenuDTO, DishDTO } from '../../dtos/EstablishmentDTO';

import { CompanyTabRoutes } from './tab.routes';

export type CompanyStackParamList = {
	Home: undefined;
	DishesMenu: { name: string; menu: MenuDTO[] };
	DishDetails: DishDTO;
};

const { Navigator: StackNavigator, Screen: StackScreen } =
	createStackNavigator<CompanyStackParamList>();

export function CompanyStackRoutes() {
	return (
		<StackNavigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Home"
		>
			<StackScreen name="Home" component={CompanyTabRoutes} />
		</StackNavigator>
	);
}

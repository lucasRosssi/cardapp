import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DishDTO } from '../../dtos/EstablishmentDTO';

import { CompanyTabRoutes } from './tab.routes';
import { CompanyCategoryMenu } from '../../screens/company/CompanyCategoryMenu';
import { CompanyDishDetails } from '../../screens/company/CompanyDishDetails';

export type CompanyStackParamList = {
	CompanyTabRoutes: undefined;
	CompanyCategoryMenu: undefined;
	CompanyDishDetails: DishDTO | undefined;
};

const { Navigator: StackNavigator, Screen: StackScreen } =
	createStackNavigator<CompanyStackParamList>();

export function CompanyStackRoutes() {
	return (
		<StackNavigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="CompanyTabRoutes"
		>
			<StackScreen name="CompanyTabRoutes" component={CompanyTabRoutes} />
			<StackScreen name="CompanyCategoryMenu" component={CompanyCategoryMenu} />
			<StackScreen name="CompanyDishDetails" component={CompanyDishDetails} />
		</StackNavigator>
	);
}

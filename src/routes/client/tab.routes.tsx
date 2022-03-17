import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { AppIcon } from '../../components/AppIcon';

import { ClientStackRoutes } from './stack.routes';
import { MyProfile } from '../../screens/client/MyProfile';
import { Settings } from '../../screens/client/Settings';

export type RootTabParamList = {
	Home: undefined;
	MyProfile: undefined;
	Settings: undefined;
};

export type RootStackParamList = {
	DishesMenu: undefined;
};

const { Navigator: TabNavigator, Screen: TabScreen } =
	createBottomTabNavigator<RootTabParamList>();

export function ClientTabRoutes() {
	const theme = useTheme();

	return (
		<TabNavigator
			screenOptions={{
				headerShown: false,
				tabBarActiveBackgroundColor: theme.colors.full_light,
				tabBarInactiveBackgroundColor: theme.colors.full_light,
				tabBarStyle: {
					height: RFValue(45),
					elevation: 10,
				},
				tabBarShowLabel: false,
				tabBarHideOnKeyboard: true,
			}}
			backBehavior="history"
		>
			<TabScreen
				name="Home"
				component={ClientStackRoutes}
				options={{
					tabBarIcon: ({ focused }) =>
						AppIcon({
							name: 'food-menu',
							color: focused
								? theme.colors.primary
								: theme.colors.item_inactive,
							size: 25,
						}),
				}}
			/>
			<TabScreen
				name="MyProfile"
				component={MyProfile}
				options={{
					tabBarIcon: ({ focused }) =>
						AppIcon({
							name: 'user',
							color: focused
								? theme.colors.primary
								: theme.colors.item_inactive,
							size: 25,
						}),
				}}
			/>
			<TabScreen
				name="Settings"
				component={Settings}
				options={{
					tabBarIcon: ({ focused }) =>
						AppIcon({
							name: 'settings',
							color: focused
								? theme.colors.primary
								: theme.colors.item_inactive,
							size: 25,
						}),
				}}
			/>
		</TabNavigator>
	);
}

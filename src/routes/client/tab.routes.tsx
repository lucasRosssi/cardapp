import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { AppIcon } from '../../components/AppIcon';

import { ClientProfile } from '../../screens/client/ClientProfile';
import { ClientSettings } from '../../screens/client/ClientSettings';
import { ClientDashboard } from '../../screens/client/ClientDashboard';

export type ClientTabParamList = {
	ClientDashboard: undefined;
	ClientProfile: undefined;
	ClientSettings: undefined;
};

const { Navigator: TabNavigator, Screen: TabScreen } =
	createBottomTabNavigator<ClientTabParamList>();

export function ClientTabRoutes() {
	const theme = useTheme();

	return (
		<TabNavigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					height: RFValue(45),
					elevation: 10,
					backgroundColor: theme.colors.full_light,
				},
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.item_inactive,
				tabBarShowLabel: false,
				tabBarHideOnKeyboard: true,
			}}
			backBehavior="history"
		>
			<TabScreen
				name="ClientDashboard"
				component={ClientDashboard}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<>
							<AppIcon name="food-menu" color={color} size={25} />
							<View
								style={
									focused && {
										position: 'absolute',
										bottom: 0,
										width: RFValue(80),
										height: 3,
										backgroundColor: color,
										borderRadius: RFValue(50),
									}
								}
							/>
						</>
					),
				}}
			/>
			<TabScreen
				name="ClientProfile"
				component={ClientProfile}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<>
							<AppIcon name="user" color={color} size={25} />
							<View
								style={
									focused && {
										position: 'absolute',
										bottom: 0,
										width: RFValue(80),
										height: 3,
										backgroundColor: color,
										borderRadius: RFValue(50),
									}
								}
							/>
						</>
					),
				}}
			/>
			<TabScreen
				name="ClientSettings"
				component={ClientSettings}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<>
							<AppIcon name="settings" color={color} size={25} />
							<View
								style={
									focused && {
										position: 'absolute',
										bottom: 0,
										width: RFValue(80),
										height: 3,
										backgroundColor: color,
										borderRadius: RFValue(50),
									}
								}
							/>
						</>
					),
				}}
			/>
		</TabNavigator>
	);
}

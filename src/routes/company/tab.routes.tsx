import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { AppIcon } from '../../components/AppIcon';

import { CompanyProfile } from '../../screens/company/CompanyProfile';
import { CompanySettings } from '../../screens/company/CompanySettings';
import { CompanyDashboard } from '../../screens/company/CompanyDashboard';

export type CompanyTabParamList = {
	CompanyDashboard: undefined;
	CompanyProfile: undefined;
	CompanySettings: undefined;
};

const { Navigator: TabNavigator, Screen: TabScreen } =
	createBottomTabNavigator<CompanyTabParamList>();

export function CompanyTabRoutes() {
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
				name="CompanyDashboard"
				component={CompanyDashboard}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<>
							<AppIcon name="restaurant" color={color} size={25} />
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
				name="CompanyProfile"
				component={CompanyProfile}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<>
							<AppIcon name="store" color={color} size={32} />
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
				name="CompanySettings"
				component={CompanySettings}
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

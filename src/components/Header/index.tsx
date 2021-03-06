import React from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AppIcon } from '../AppIcon';

import {
	Container,
	User,
	Picture,
	Username,
	Company,
	CompanyPicture,
	CompanyName,
	Logo,
	BackButton,
} from './styles';
import { useAuth } from '../../hooks/useAuth';

export function Header() {
	const theme = useTheme();
	const route = useRoute();
	const { goBack } = useNavigation();
	const { user, company } = useAuth();

	const currentScreen = route.name as keyof ReactNavigation.RootParamList;

	return (
		<Container testID="header">
			{currentScreen === 'ClientDashboard' && (
				<User testID="user-info">
					<Picture
						source={{ uri: user.picture }}
						from={{ scale: 0 }}
						animate={{ scale: 1 }}
					/>
					<Username testID="user-name">{user.first_name}</Username>
				</User>
			)}
			{currentScreen === 'CompanyDashboard' && (
				<Company>
					<CompanyPicture source={{ uri: company.picture }} />
					<CompanyName>{company.name}</CompanyName>
				</Company>
			)}
			{(currentScreen === 'ClientDishesMenu' ||
				currentScreen === 'ClientDishDetails' ||
				currentScreen === 'CompanyDishDetails' ||
				currentScreen === 'CompanyCategoryMenu') && (
				<BackButton testID="back-button" onPress={goBack}>
					<AppIcon name="chevron-left" color={theme.colors.shape} />
				</BackButton>
			)}

			<Logo
				from={
					currentScreen === 'ClientDashboard' && { opacity: 0, translateX: 300 }
				}
				animate={{ opacity: 1, translateX: 0 }}
				transition={{ type: 'timing', duration: 500 }}
			>
				MyCardapp
			</Logo>
		</Container>
	);
}

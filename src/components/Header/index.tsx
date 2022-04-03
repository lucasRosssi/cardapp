import React from 'react';
import { useTheme } from 'styled-components';
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
		<Container>
			{currentScreen === 'ClientDashboard' && (
				<User>
					<Picture source={{ uri: user.picture }} />
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
				currentScreen === 'ClientDishDetails') && (
				<BackButton onPress={goBack}>
					<AppIcon name="chevron-left" color={theme.colors.shape} />
				</BackButton>
			)}

			<Logo>Cardapp</Logo>
		</Container>
	);
}

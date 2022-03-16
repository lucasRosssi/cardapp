import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AppIcon } from '../AppIcon';

import { Container, User, Picture, Username, Logo, BackButton } from './styles';
import { useAuth } from '../../hooks/useAuth';

export function Header() {
	const theme = useTheme();
	const route = useRoute();
	const { goBack } = useNavigation();
	const { user } = useAuth();

	const currentScreen = route.name as keyof ReactNavigation.RootParamList;

	return (
		<Container>
			{currentScreen === 'Dashboard' && (
				<User>
					<Picture source={{ uri: user.picture }} />
					<Username>{user.first_name}</Username>
				</User>
			)}
			{currentScreen === 'DishesMenu' && (
				<BackButton onPress={goBack}>
					<AppIcon name="chevron-left" color={theme.colors.shape} />
				</BackButton>
			)}

			<Logo>Cardapp</Logo>
		</Container>
	);
}

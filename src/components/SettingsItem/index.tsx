import React from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { AppIcon, AppIconProps } from '../AppIcon';
import { Separator } from '../Separator';

import { Container, Title } from './styles';

interface SettingsItemProps {
	title: string;
	icon: AppIconProps['name'];
}

export function SettingsItem({ title, icon }: SettingsItemProps) {
	const theme = useTheme();
	const { signOut } = useAuth();

	function activateItem() {
		if (icon === 'power') {
			Alert.alert('Sair', 'Tem certeza que deseja sair do app?', [
				{
					text: 'Sim',
					onPress: () => signOut(),
				},
				{
					text: 'Não',
				},
			]);
		}
	}

	return (
		<>
			<Container onPress={activateItem}>
				<AppIcon name={icon} color={theme.colors.text} size={25} />
				<Title>{title}</Title>
			</Container>

			<Separator color={theme.colors.separator} />
		</>
	);
}

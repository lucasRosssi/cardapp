import React from 'react';
import { useTheme } from 'styled-components';
import { AppIcon, AppIconProps } from '../AppIcon';
import { Separator } from '../Separator';

import { Container, Title } from './styles';

interface SettingsItemProps {
	title: string;
	icon: AppIconProps['name'];
}

export function SettingsItem({ title, icon }: SettingsItemProps) {
	const theme = useTheme();

	return (
		<>
			<Container>
				<AppIcon name={icon} color={theme.colors.text} size={25} />
				<Title>{title}</Title>
			</Container>

			<Separator color={theme.colors.separator} />
		</>
	);
}

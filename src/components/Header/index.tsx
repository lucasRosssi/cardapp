import React from 'react';
import { useTheme } from 'styled-components';

import { AppIcon } from '../AppIcon';

import { Container, Button, Logo } from './styles';

export function Header() {
	const theme = useTheme();

	return (
		<Container>
			<Button>
				<AppIcon name="menu" color={theme.colors.shape} />
			</Button>

			<Logo>Cardapp</Logo>

			<Button>
				<AppIcon name="settings" color={theme.colors.shape} />
			</Button>
		</Container>
	);
}

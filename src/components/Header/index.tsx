import React from 'react';
import { useTheme } from 'styled-components';

import { Container, User, Picture, Username, Logo } from './styles';

export function Header() {
	const theme = useTheme();

	return (
		<Container>
			<User>
				<Picture source={{ uri: 'https://www.github.com/lucasRosssi.png' }} />
				<Username>Lucas</Username>
			</User>

			<Logo>Cardapp</Logo>
		</Container>
	);
}

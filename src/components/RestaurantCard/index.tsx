import React from 'react';
import { useTheme } from 'styled-components';
import { AppIcon } from '../AppIcon';
import { Separator } from '../Separator';

import { Container, Header, Name, LocationButton, Content } from './styles';

export function RestaurantCard() {
	const theme = useTheme();

	return (
		<Container>
			<Header>
				<Name>Wonderful</Name>

				<LocationButton>
					<AppIcon name="location" color={theme.colors.shape} size={23} />
				</LocationButton>
			</Header>

			<Separator color={theme.colors.shape} />

			<Content></Content>
		</Container>
	);
}

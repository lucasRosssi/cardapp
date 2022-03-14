import React from 'react';
import { useTheme } from 'styled-components';
import { AppIcon } from '../AppIcon';
import { Separator } from '../Separator';

import {
	Container,
	Header,
	Name,
	Button,
	Content,
	Picture,
	LeftContent,
	RightContent,
} from './styles';

export function RestaurantCard() {
	const theme = useTheme();

	return (
		<Container>
			<LeftContent>
				<Header>
					<Name>Restaurante Tudo de Bom</Name>
				</Header>

				<Separator color={theme.colors.separator} />

				<Content>
					<Picture
						source={{
							uri: 'https://vinicolaaraucaria.com.br/wp-content/uploads/2020/06/interna_restaurante-1-1400x700.jpg',
						}}
					/>
				</Content>
			</LeftContent>

			<Separator vertical color={theme.colors.separator} />

			<RightContent>
				<Button>
					<AppIcon name="location" color={theme.colors.primary} size={25} />
				</Button>

				<Button>
					<AppIcon name="food-menu" color={theme.colors.primary} size={25} />
				</Button>

				<Button>
					<AppIcon name="gallery" color={theme.colors.primary} size={25} />
				</Button>
			</RightContent>
		</Container>
	);
}

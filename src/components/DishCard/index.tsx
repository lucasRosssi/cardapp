import React from 'react';
import { useTheme } from 'styled-components';

import { AppIcon } from '../AppIcon';
import { Separator } from '../Separator';

import {
	Button,
	Container,
	Content,
	Header,
	Name,
	Picture,
	Footer,
	InteractionButtons,
	Price,
} from './styles';

interface DishCardProps {
	name: string;
	picture: string;
	price: number;
}

export function DishCard({ name, picture, price }: DishCardProps) {
	const theme = useTheme();

	return (
		<Container>
			<Header>
				<Name>{name}</Name>
				<Price>R$ {price}</Price>
			</Header>

			<Separator color={theme.colors.separator} />

			<Content>
				<Picture
					source={{
						uri: picture,
					}}
				/>
			</Content>
			<Footer>
				<InteractionButtons>
					<Button>
						<AppIcon
							name="like-outline"
							size={27}
							color={theme.colors.primary}
						/>
					</Button>
					<Button>
						<AppIcon name="comment" size={27} color={theme.colors.primary} />
					</Button>
				</InteractionButtons>
				<Button style={{ marginRight: 0 }}>
					<AppIcon name="info" size={35} color={theme.colors.primary} />
				</Button>
			</Footer>
		</Container>
	);
}

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { AppIcon } from '../AppIcon';
import { Separator } from '../Separator';

import { MenuDTO } from '../../dtos/EstablishmentDTO';

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

interface EstablishmentCardProps {
	name: string;
	picture: string;
	menu: MenuDTO[];
}

export function EstablishmentCard({
	name,
	picture,
	menu,
}: EstablishmentCardProps) {
	const theme = useTheme();
	const { navigate } = useNavigation();

	function handleGoToDishesMenu() {
		navigate('DishesMenu', { name, menu });
	}

	return (
		<Container>
			<LeftContent onPress={handleGoToDishesMenu}>
				<Header>
					<Name>{name}</Name>
				</Header>

				<Separator color={theme.colors.separator} />

				<Content>
					<Picture
						source={{
							uri: picture,
						}}
					/>
				</Content>
			</LeftContent>

			<Separator vertical color={theme.colors.separator} />

			<RightContent>
				<Button>
					<AppIcon name="location" color={theme.colors.primary} size={25} />
				</Button>

				<Button onPress={handleGoToDishesMenu}>
					<AppIcon name="food-menu" color={theme.colors.primary} size={25} />
				</Button>

				<Button>
					<AppIcon name="gallery" color={theme.colors.primary} size={25} />
				</Button>
			</RightContent>
		</Container>
	);
}

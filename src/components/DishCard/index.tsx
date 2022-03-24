import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Separator } from '../Separator';

import { Container, Content, Header, Name, Picture, Price } from './styles';

interface DishCardProps {
	name: string;
	price: number;
	picture: string;
	details: string;
}

export function DishCard({ name, picture, price, details }: DishCardProps) {
	const theme = useTheme();
	const { navigate } = useNavigation();

	function readDetails() {
		navigate('DishDetails', {
			name,
			price,
			picture,
			details,
		});
	}

	return (
		<Container onPress={readDetails}>
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
		</Container>
	);
}

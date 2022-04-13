import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Separator } from '../Separator';

import { Container, Content, Likes, Name, Picture, Price } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { AppIcon } from '../AppIcon';

interface DishCardProps {
	name: string;
	price: number;
	picture: string;
	details: string;
	like_count: number;
}

export function DishCard({
	name,
	picture,
	price,
	details,
	like_count,
}: DishCardProps) {
	const theme = useTheme();
	const { navigate } = useNavigation();
	const { user, company } = useAuth();

	function readDetails() {
		if (user.id) {
			navigate('ClientDishDetails', {
				name,
				price,
				picture,
				details,
				like_count,
			});
		}

		/*if (company.id) {
			navigate('CompanyDishDetails', {
				name,
				price,
				picture,
				details,
			});
		}*/
	}

	return (
		<Container testID="card-dish" onPress={readDetails}>
			<Picture
				source={{
					uri: picture,
				}}
			/>

			<Separator vertical color={theme.colors.separator} />

			<Content>
				<Name>{name}</Name>

				<Price>R$ 20,00</Price>

				<Likes>
					<AppIcon name="like-fill" color={theme.colors.primary} size={10} />{' '}
					{like_count}
				</Likes>
			</Content>
		</Container>
	);
}

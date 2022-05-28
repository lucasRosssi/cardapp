import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Separator } from '../Separator';

import { Container, Content, Likes, Name, Picture, Price } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { AppIcon } from '../AppIcon';
import { formatMoney } from '../../utils/formatMoney';

interface DishCardProps {
	name: string;
	price: number;
	picture: string;
	details: string;
	like_count: number;
	onPress: () => void;
}

export function DishCard({
	name,
	picture,
	price,
	details,
	like_count,
	onPress,
}: DishCardProps) {
	const theme = useTheme();
	const { navigate } = useNavigation();
	const { authStatus } = useAuth();

	function readDetails() {
		if (authStatus === 'user') {
			navigate('ClientDishDetails', {
				name,
				price,
				picture,
				details,
				like_count,
			});
		}

		if (authStatus === 'company') {
			onPress();
		}
	}

	const formattedPrice = formatMoney(price);

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

				<Price>R$ {formattedPrice}</Price>

				<Likes>
					<AppIcon name="like-fill" color={theme.colors.primary} size={10} />{' '}
					{like_count}
				</Likes>
			</Content>
		</Container>
	);
}

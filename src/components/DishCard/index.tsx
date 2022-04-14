import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Separator } from '../Separator';

import { Container, Content, Likes, Name, Picture, Price } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { AppIcon } from '../AppIcon';
import { MotiView } from 'moti';

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
		<MotiView
			from={{ translateX: 30, opacity: 0 }}
			animate={{ translateX: 0, opacity: 1 }}
			transition={{ type: 'timing', duration: 500 }}
		>
			<Container testID="card-dish" onPress={readDetails}>
				<Picture
					source={{
						uri: picture,
					}}
				/>

				<Separator vertical color={theme.colors.separator} />

				<Content>
					<Name>{name}</Name>

					<Price>R$ {price}</Price>

					<Likes>
						<AppIcon name="like-fill" color={theme.colors.primary} size={10} />{' '}
						{like_count}
					</Likes>
				</Content>
			</Container>
		</MotiView>
	);
}

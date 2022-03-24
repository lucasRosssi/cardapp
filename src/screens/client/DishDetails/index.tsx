import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';

import { AppIcon } from '../../../components/AppIcon';
import { Header } from '../../../components/Header';
import { RootStackParamList } from '../../../routes/client/stack.routes';

import {
	Container,
	DishHeader,
	Name,
	Price,
	ImageSlider,
	Picture,
	Content,
	Details,
	Footer,
	InteractionButtons,
	Button,
} from './styles';

export function DishDetails() {
	const theme = useTheme();
	const route = useRoute();

	const params = route.params as RootStackParamList['DishDetails'];

	const formattedPrice = params.price.toFixed(2).replace('.', ',');

	return (
		<>
			<Header />
			<Container>
				<DishHeader>
					<Name>{params.name}</Name>
					<Price>R$ {formattedPrice}</Price>
				</DishHeader>

				<ImageSlider>
					<Picture
						source={{
							uri: params.picture,
						}}
					/>
				</ImageSlider>

				<Content>
					<Details>{params.details}</Details>
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
				</Footer>
			</Container>
		</>
	);
}

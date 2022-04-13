import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Header } from '../../../components/Header';
import { InteractionBar } from '../../../components/InteractionBar';
import { CommentsModal } from '../../../components/CommentsModal';

import {
	Container,
	DishHeader,
	NameInput,
	PriceInput,
	ImageSlider,
	Picture,
	Content,
	DetailsInput,
	NoPicture,
	ChangePicture,
} from './styles';
import { DishDTO } from '../../../dtos/EstablishmentDTO';
import { AppIcon } from '../../../components/AppIcon';
import { useTheme } from 'styled-components/native';
import { Button } from '../../../components/Button';

export function CompanyDishDetails() {
	const route = useRoute();
	const theme = useTheme();

	const params = route.params
		? (route.params as DishDTO)
		: {
				name: '',
				price: 0,
				picture: '',
				details: '',
		  };

	const formattedPrice = params.price.toFixed(2).replace('.', ',');

	return (
		<>
			<Header />
			<Container>
				<Content>
					<DishHeader>
						<NameInput topPlaceholder="Nome" />
						<PriceInput topPlaceholder="Preço" keyboardType="numeric" />
					</DishHeader>

					{params.picture ? (
						<ImageSlider>
							<Picture
								source={{
									uri: params.picture,
								}}
							/>
						</ImageSlider>
					) : (
						<NoPicture>
							<AppIcon
								name="random-food"
								size={85}
								color={theme.colors.full_light}
							/>

							<ChangePicture>
								<AppIcon name="camera" color={theme.colors.full_light} />
							</ChangePicture>
						</NoPicture>
					)}

					<DetailsInput topPlaceholder="Detalhes" />

					<Button title="Salvar" />
				</Content>
			</Container>
		</>
	);
}

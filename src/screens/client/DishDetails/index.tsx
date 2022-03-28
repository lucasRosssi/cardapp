import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Header } from '../../../components/Header';
import { InteractionBar } from '../../../components/InteractionBar';
import { CommentsModal } from '../../../components/CommentsModal';

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
} from './styles';

export function DishDetails() {
	const route = useRoute();

	const [isVisible, setIsVisible] = useState(false);
	const [isLiked, setIsLiked] = useState(false);

	const params = route.params as RootStackParamList['DishDetails'];

	const formattedPrice = params.price.toFixed(2).replace('.', ',');

	function handleCommentsOnPress() {
		setIsVisible(true);
	}

	function handleCloseModal() {
		setIsVisible(false);
	}

	function handleLike() {
		setIsLiked(!isLiked);
	}

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
				<InteractionBar
					likeOnPress={handleLike}
					commentOnPress={handleCommentsOnPress}
					isLiked={isLiked}
				/>
			</Container>

			<CommentsModal
				isVisible={isVisible}
				closeModal={handleCloseModal}
				isLiked={isLiked}
				handleLike={handleLike}
			/>
		</>
	);
}

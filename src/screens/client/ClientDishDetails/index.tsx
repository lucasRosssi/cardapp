import React, { useEffect, useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { formatMoney } from '../../../utils/formatMoney';

import { Header } from '../../../components/Header';
import { InteractionBar } from '../../../components/InteractionBar';
import { CommentsModal } from '../../../components/CommentsModal';

import { DishDTO } from '../../../dtos/EstablishmentDTO';

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

export interface ClientDishDetailsParams extends DishDTO {}

interface CommentProps {
	id: string;
	user: {
		name: string;
		picture: string;
	};
	content: string;
}

export function ClientDishDetails() {
	const { params: routeParams } = useRoute();

	const [isVisible, setIsVisible] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [comments, setComments] = useState<CommentProps[]>([]);

	const params = useMemo(
		() => routeParams as ClientDishDetailsParams,
		[routeParams]
	);

	const formattedPrice = formatMoney(params.price);

	function handleCommentsOnPress() {
		setIsVisible(true);
	}

	function handleCloseModal() {
		setIsVisible(false);
	}

	function handleLike() {
		setIsLiked(!isLiked);
	}

	useEffect(() => {
		async function fetchComments() {}

		fetchComments();
	}, []);

	return (
		<>
			<Header />
			<Container>
				<Content>
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

					<Details testID="details-dish">{params.details}</Details>
				</Content>
				{!isVisible && (
					<InteractionBar
						likeOnPress={handleLike}
						commentOnPress={handleCommentsOnPress}
						isLiked={isLiked}
					/>
				)}
			</Container>

			<CommentsModal
				isVisible={isVisible}
				closeModal={handleCloseModal}
				isLiked={isLiked}
				handleLike={handleLike}
				comments={comments}
			/>
		</>
	);
}

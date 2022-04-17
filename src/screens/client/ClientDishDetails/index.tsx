import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { api } from '../../../services/api';

import { Header } from '../../../components/Header';
import { InteractionBar } from '../../../components/InteractionBar';
import { CommentsModal } from '../../../components/CommentsModal';

import { ClientStackParamList } from '../../../routes/client/stack.routes';

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

interface CommentProps {
	id: string;
	user: {
		name: string;
		picture: string;
	};
	content: string;
}

export function ClientDishDetails() {
	const route = useRoute();

	const [isVisible, setIsVisible] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [comments, setComments] = useState<CommentProps[]>([]);

	const params = route.params as ClientStackParamList['ClientDishDetails'];

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

	useEffect(() => {
		async function fetchComments() {
			const response = await api.get(`dishes/${params.id}`);

			setComments(response.data.comments);
			console.log(response.data);
		}

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

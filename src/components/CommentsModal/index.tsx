import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from 'styled-components';
import { CommentDTO } from '../../dtos/CommentDTO';
import { useAuth } from '../../hooks/useAuth';

import { AppIcon } from '../AppIcon';
import { Comment } from '../Comment';
import { InteractionBar } from '../InteractionBar';

import {
	Container,
	SwipeableIndicator,
	CommentsList,
	CommentInput,
	Input,
	SendButton,
	UserPicture,
	CommentsWrapper,
} from './styles';

interface CommentsModalProps {
	isVisible: boolean;
	closeModal: () => void;
	isLiked: boolean;
	handleLike: () => void;
	comments: CommentDTO[];
}

export function CommentsModal({
	isVisible,
	closeModal,
	isLiked,
	handleLike,
	comments,
}: CommentsModalProps) {
	const theme = useTheme();
	const { user } = useAuth();

	return (
		<Modal
			style={{ margin: 0 }}
			isVisible={isVisible}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			swipeDirection="down"
			onSwipeComplete={closeModal}
			onBackButtonPress={closeModal}
			onBackdropPress={closeModal}
			backdropOpacity={0.5}
			propagateSwipe
		>
			<Container>
				<InteractionBar
					style={{ backgroundColor: theme.colors.background }}
					likeOnPress={handleLike}
					commentOnPress={closeModal}
					isLiked={isLiked}
				/>

				<CommentsWrapper>
					<CommentsList
						scrollEnabled
						data={comments}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Comment user={item.user} content={item.content} />
						)}
					/>
				</CommentsWrapper>

				<CommentInput>
					<UserPicture source={{ uri: user.picture }} />
					<Input
						testID="input-comment"
						placeholder="Escreva um comentário..."
						multiline
					/>

					<SendButton testID="button-send">
						<AppIcon name="send" color={theme.colors.full_light} size={20} />
					</SendButton>
				</CommentInput>

				<SwipeableIndicator />
			</Container>
		</Modal>
	);
}

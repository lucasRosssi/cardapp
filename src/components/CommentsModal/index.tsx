import React from 'react';
import Modal from 'react-native-modal';
import { useTheme } from 'styled-components';

import { AppIcon } from '../AppIcon';
import { InteractionBar } from '../InteractionBar';

import {
	Container,
	SwipeableIndicator,
	CommentsWrapper,
	CommentInput,
	Input,
	SendButton,
} from './styles';

interface CommentsModalProps {
	isVisible: boolean;
	closeModal: () => void;
	isLiked: boolean;
	handleLike: () => void;
}

export function CommentsModal({
	isVisible,
	closeModal,
	isLiked,
	handleLike,
}: CommentsModalProps) {
	const theme = useTheme();

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
		>
			<Container>
				<InteractionBar
					style={{ backgroundColor: theme.colors.background }}
					likeOnPress={handleLike}
					commentOnPress={closeModal}
					isLiked={isLiked}
				/>

				<CommentsWrapper></CommentsWrapper>

				<CommentInput>
					<Input placeholder="Escreva um comentário..." />

					<SendButton>
						<AppIcon name="send" color={theme.colors.full_light} size={20} />
					</SendButton>
				</CommentInput>

				<SwipeableIndicator />
			</Container>
		</Modal>
	);
}

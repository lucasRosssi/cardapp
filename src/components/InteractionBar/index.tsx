import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from 'styled-components';

import { AppIcon } from '../AppIcon';

import { Button, Container, InteractionButtons } from './styles';

interface InteractionBarProps extends ViewProps {
	likeOnPress?: () => void;
	commentOnPress?: () => void;
	isLiked: boolean;
}

export function InteractionBar({
	style,
	likeOnPress,
	commentOnPress,
	isLiked,
}: InteractionBarProps) {
	const theme = useTheme();

	return (
		<Container style={style}>
			<InteractionButtons>
				<Button testID="button-like" onPress={likeOnPress}>
					<AppIcon
						name={isLiked ? 'like-fill' : 'like-outline'}
						size={27}
						color={theme.colors.primary}
					/>
				</Button>
				<Button testID="button-comment" onPress={commentOnPress}>
					<AppIcon name="comment" size={27} color={theme.colors.primary} />
				</Button>
			</InteractionButtons>
		</Container>
	);
}

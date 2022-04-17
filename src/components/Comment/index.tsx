import React from 'react';
import { CommentDTO } from '../../dtos/CommentDTO';

import { Container, User, Picture, Name, Content } from './styles';

interface CommentProps {
	user: {
		name: string;
		picture: string;
	};
	content: string;
}

export function Comment({ user, content }: CommentProps) {
	return (
		<Container>
			<User>
				<Picture source={{ uri: user.picture }} />
				<Name>{user.name}</Name>
			</User>

			<Content>{content}</Content>
		</Container>
	);
}

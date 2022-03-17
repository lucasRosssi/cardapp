import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface ButtonProps extends PressableProps {
	title?: string;
	color?: string;
	textColor?: string;
}

export function Button({ title, color, textColor, ...rest }: ButtonProps) {
	const theme = useTheme();

	return (
		<Pressable {...rest}>
			<Container color={color ? color : theme.colors.primary}>
				<Title textColor={textColor ? textColor : theme.colors.shape}>
					{title}
				</Title>
			</Container>
		</Pressable>
	);
}

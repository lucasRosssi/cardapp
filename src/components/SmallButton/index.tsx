import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
	title?: string;
	color?: string;
	textColor?: string;
}

export function SmallButton({ title, color, textColor, ...rest }: ButtonProps) {
	const theme = useTheme();

	return (
		<Container
			{...rest}
			activeOpacity={0.6}
			color={color ? color : theme.colors.primary}
		>
			<Title textColor={textColor ? textColor : theme.colors.shape}>
				{title}
			</Title>
		</Container>
	);
}

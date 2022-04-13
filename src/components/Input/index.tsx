import React from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

import { Container, Placeholder, TextInput, Error } from './styles';

interface InputProps extends TextInputProps {
	topPlaceholder: string;
	error?: string;
	style?: StyleProp<ViewStyle>;
}

export function Input({ topPlaceholder, error, style, ...rest }: InputProps) {
	return (
		<Container style={style}>
			<Placeholder>{topPlaceholder}</Placeholder>
			<TextInput {...rest} />

			<Error>{error && error}</Error>
		</Container>
	);
}

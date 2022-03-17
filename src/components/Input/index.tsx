import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Placeholder, TextInput, Error } from './styles';

interface InputProps extends TextInputProps {
	topPlaceholder: string;
	error?: string;
}

export function Input({ topPlaceholder, error, ...rest }: InputProps) {
	return (
		<Container>
			<Placeholder>{topPlaceholder}</Placeholder>
			<TextInput {...rest} />

			<Error>{error && error}</Error>
		</Container>
	);
}

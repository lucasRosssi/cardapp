import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

import { Container, Placeholder, TextInput, Error } from './styles';

interface InputProps extends TextInputProps {
	topPlaceholder: string;
	style?: StyleProp<ViewStyle>;
	control: Control;
	name: string;
	error?: string;
}

export function Input({
	topPlaceholder,
	style,
	control,
	name,
	error,
	...rest
}: InputProps) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value } }) => (
				<Container style={style}>
					<Placeholder>{topPlaceholder}</Placeholder>
					<TextInput value={value} onChangeText={onChange} {...rest} />

					{error && <Error>{error}</Error>}
				</Container>
			)}
		/>
	);
}

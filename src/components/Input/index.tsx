import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {
	StyleProp,
	TextInput as TextInputNative,
	TextInputProps,
	ViewStyle,
} from 'react-native';

import { Container, Placeholder, TextInput, Error } from './styles';

interface InputProps extends TextInputProps {
	topPlaceholder: string;
	style?: StyleProp<ViewStyle>;
	control: Control;
	name: string;
	error?: string;
	ref?: React.Ref<TextInputNative>;
}

export const Input: React.FC<InputProps> = ({
	topPlaceholder,
	style,
	control,
	name,
	error,
	ref,
	...rest
}) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value } }) => (
				<Container style={style}>
					<Placeholder>{topPlaceholder}</Placeholder>
					<TextInput
						ref={ref}
						value={value}
						onChangeText={onChange}
						{...rest}
					/>

					{error && <Error>{error}</Error>}
				</Container>
			)}
		/>
	);
};

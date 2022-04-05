import React from 'react';
import { useTheme } from 'styled-components';
import { Control, Controller } from 'react-hook-form';
import { ActivityIndicator, TextInputProps } from 'react-native';
import { AppIcon, AppIconProps } from '../AppIcon';

import { Button, Container, Error, Input } from './styles';

interface AppInputProps extends TextInputProps {
	name: string;
	control: Control;
	error?: string;
	button?: boolean;
	buttonIcon?: AppIconProps['name'];
	onButtonPress?: () => void;
	isLoading?: boolean;
}

export function AppInput({
	name,
	control,
	error,
	button,
	buttonIcon,
	onButtonPress,
	isLoading,
	...rest
}: AppInputProps) {
	const theme = useTheme();

	return (
		<Container>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input value={value} onChangeText={onChange} {...rest} />
				)}
			/>
			{button && (
				<Button onPress={onButtonPress}>
					{isLoading ? (
						<ActivityIndicator color={theme.colors.full_light} size={30} />
					) : (
						<>
							{buttonIcon && (
								<AppIcon name={buttonIcon} color={theme.colors.full_light} />
							)}
						</>
					)}
				</Button>
			)}
			{error && <Error>{error}</Error>}
		</Container>
	);
}

import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

export function LoadingIndicator() {
	const theme = useTheme();

	return (
		<Container testID="loading">
			<ActivityIndicator color={theme.colors.primary} size={50} />
		</Container>
	);
}

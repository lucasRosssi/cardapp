import React from 'react';

import { Container, Loading } from './styles';

export const LoadingIndicator: React.FC = () => {
	return (
		<Container testID="loading">
			<Loading />
		</Container>
	);
};

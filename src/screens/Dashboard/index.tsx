import React from 'react';
import { Text } from 'react-native';
import { Header } from '../../components/Header';

import { Container } from './styles';

export function Dashboard() {
	return (
		<Container>
			<Header />

			<Text>DASHBOARD</Text>
		</Container>
	);
}

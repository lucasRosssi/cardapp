import React from 'react';

import { Header } from '../../../components/Header';
import { RestaurantCard } from '../../../components/RestaurantCard';

import { Container, Content, Title } from './styles';

export function Dashboard() {
	return (
		<Container>
			<Header />

			<Content>
				<Title>Restaurantes</Title>

				<RestaurantCard />
			</Content>
		</Container>
	);
}

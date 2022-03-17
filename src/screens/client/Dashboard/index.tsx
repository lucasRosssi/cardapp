import React from 'react';

import { Header } from '../../../components/Header';
import { EstablishmentCard } from '../../../components/EstablishmentCard';
import { establishments } from '../../../data/data';

import { Container, Content, Title } from './styles';

export function Dashboard() {
	const restaurantsList = establishments.map(({ name, picture }) => (
		<EstablishmentCard key={name} name={name} picture={picture} />
	));

	return (
		<Container>
			<Header />

			<Content>
				<Title>Estabelecimentos</Title>

				<>{restaurantsList}</>
			</Content>
		</Container>
	);
}

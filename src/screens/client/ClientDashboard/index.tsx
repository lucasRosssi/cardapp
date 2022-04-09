import React, { useEffect, useState } from 'react';
import { api } from '../../../services/api';

import { Header } from '../../../components/Header';
import { EstablishmentCard } from '../../../components/EstablishmentCard';
import { LoadingIndicator } from '../../../components/LoadingIndicator';

import { EstablishmentDTO } from '../../../dtos/EstablishmentDTO';

import { Container, Content, EstablishmentsList, Title } from './styles';

export function ClientDashboard() {
	const [isMounted, setIsMounted] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	const [establishments, setEstablishments] = useState<EstablishmentDTO[]>([]);

	async function fetchEstablishments() {
		try {
			const response = await api.get('/establishments');
			setEstablishments(response.data);
		} catch (error) {
			throw new Error('### Oh no... ###');
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (isMounted) {
			fetchEstablishments();
		}

		return () => setIsMounted(false);
	}, []);

	return (
		<Container>
			<Header />

			<Content>
				{isLoading ? (
					<LoadingIndicator />
				) : (
					<EstablishmentsList
						testID="establishment-card"
						data={establishments}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<EstablishmentCard
								name={item.name}
								picture={item.picture}
								menu={item.menu}
							/>
						)}
						ListHeaderComponent={<Title>Estabelecimentos</Title>}
					/>
				)}
			</Content>
		</Container>
	);
}

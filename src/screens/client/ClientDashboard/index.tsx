import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { api } from '../../../services/api';
import axios from 'axios';

import { Header } from '../../../components/Header';
import { EstablishmentCard } from '../../../components/EstablishmentCard';
import { LoadingIndicator } from '../../../components/LoadingIndicator';

import { EstablishmentDTO } from '../../../dtos/EstablishmentDTO';

import { Container, EstablishmentsList, Title } from './styles';

export function ClientDashboard() {
	const [isMounted, setIsMounted] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	const [establishments, setEstablishments] = useState<EstablishmentDTO[]>([]);
	const [slicedEstablishments, setSlicedEstablishments] = useState<
		EstablishmentDTO[]
	>([]);
	const [sliceStartIndex, setSliceStartIndex] = useState(6);
	const [sliceEndIndex, setSliceEndIndex] = useState(12);

	const fetchEstablishments = useCallback(async () => {
		try {
			const { data } = await api.get<EstablishmentDTO[]>('/establishments');

			setEstablishments(data);
			setSlicedEstablishments(data.slice(0, 6));
		} catch (error) {
			if (axios.isAxiosError(error)) {
				Alert.alert('', error.message);
			} else {
				Alert.alert('Erro', 'Falha ao carregar os dados dos estabelecimentos');
			}
		} finally {
			setIsLoading(false);
		}
	}, []);

	const getNextEstablishments = useCallback(() => {
		const nextEstablishments = establishments.slice(
			sliceStartIndex,
			sliceEndIndex
		);

		setSlicedEstablishments((oldState) => [...oldState, ...nextEstablishments]);
		setSliceStartIndex((oldState) => oldState + 6);
		setSliceEndIndex((oldState) => oldState + 6);
	}, []);

	const isThereMoreEstablishments = useMemo(
		() => slicedEstablishments.length < establishments.length,
		[establishments, slicedEstablishments]
	);

	useEffect(() => {
		if (isMounted) {
			fetchEstablishments();
		}

		console.log(isThereMoreEstablishments);

		return () => setIsMounted(false);
	}, []);

	return (
		<Container>
			<Header />

			{isLoading ? (
				<LoadingIndicator />
			) : (
				<EstablishmentsList
					testID="establishment-card"
					data={slicedEstablishments}
					keyExtractor={(item) => String(item.id)}
					renderItem={({ item }) => (
						<EstablishmentCard
							name={item.name}
							picture={item.picture}
							menu={item.menus}
						/>
					)}
					ListHeaderComponent={<Title>Estabelecimentos</Title>}
					ListFooterComponent={
						isThereMoreEstablishments ? <LoadingIndicator /> : null
					}
					onEndReached={
						isThereMoreEstablishments ? getNextEstablishments : undefined
					}
				/>
			)}
		</Container>
	);
}

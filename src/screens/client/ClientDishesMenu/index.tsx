import React, { useMemo } from 'react';
import { useRoute } from '@react-navigation/native';

import { Header } from '../../../components/Header';
import { CategoryDishes } from '../../../components/CategoryDishes';

import { Container, Content, Title, CategoriesList } from './styles';

import { MenuDTO } from '../../../dtos/EstablishmentDTO';

export interface ClientDishesMenuParams {
	name: string;
	menu: MenuDTO[];
}

export function ClientDishesMenu() {
	const { params } = useRoute();

	const { name, menu } = useMemo(
		() => params as ClientDishesMenuParams,
		[params]
	);

	return (
		<Container>
			<Header />

			<Content>
				<Title>{name}</Title>

				<CategoriesList
					data={menu}
					keyExtractor={(item) => item.category}
					renderItem={({ item }) => (
						<CategoryDishes category={item.category} dishes={item.dishes} />
					)}
				/>
			</Content>
		</Container>
	);
}

import React, { useMemo } from 'react';
import { useRoute } from '@react-navigation/native';

import { Header } from '../../../components/Header';
import { CategoryDishes } from '../../../components/CategoryDishes';

import { Container, Content, Title, Categories } from './styles';

import { MenuDTO } from '../../../dtos/EstablishmentDTO';

export interface ClientDishesMenu {
	name: string;
	menu: MenuDTO[];
}

export function ClientDishesMenu() {
	const { params } = useRoute();

	const { name, menu } = useMemo(() => params as ClientDishesMenu, [params]);

	const categories_dishes = menu.map(({ category, dishes }) => (
		<CategoryDishes key={category} category={category} dishes={dishes} />
	));

	return (
		<Container>
			<Header />

			<Content>
				<Title>{name}</Title>

				<Categories>{categories_dishes}</Categories>
			</Content>
		</Container>
	);
}

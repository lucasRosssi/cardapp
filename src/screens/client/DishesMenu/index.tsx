import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Header } from '../../../components/Header';
import { CategoryDishes } from '../../../components/CategoryDishes';

import { Container, Content, Title, Categories } from './styles';

import { RootStackParamList } from '../../../routes/client/stack.routes';

export function DishesMenu() {
	const route = useRoute();

	const { name, menu } = route.params as RootStackParamList['DishesMenu'];

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

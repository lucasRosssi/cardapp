import React from 'react';

import { Header } from '../../../components/Header';
import { CategoryDishes } from '../../../components/CategoryDishes';

import { cocktails, mexican_dishes, seafood_dishes } from '../../../data/data';

import { Container, Content, Title, Categories } from './styles';

export function DishesMenu() {
	const dishes_menu = [
		{
			category: 'Frutos do Mar',
			dishes: seafood_dishes,
		},
		{
			category: 'Comida Mexicana',
			dishes: mexican_dishes,
		},
		{
			category: 'Drinks',
			dishes: cocktails,
		},
	];

	const categories_dishes = dishes_menu.map(({ category, dishes }) => (
		<CategoryDishes key={category} category={category} dishes={dishes} />
	));

	return (
		<Container>
			<Header />

			<Content>
				<Title>Restaurante Tudo de Bom</Title>

				<Categories>{categories_dishes}</Categories>
			</Content>
		</Container>
	);
}

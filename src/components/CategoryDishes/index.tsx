import React from 'react';
import { useTheme } from 'styled-components';

import { AppIcon } from '../AppIcon';
import { DishCard } from '../DishCard';

import { CategoryName, CategoryWrapper, Container, DishesList } from './styles';

interface CategoryDishesProps {
	category: string;
	dishes: {
		name: string;
		picture: string;
		price: number;
	}[];
}

export function CategoryDishes({ category, dishes }: CategoryDishesProps) {
	const theme = useTheme();

	const dishes_list = dishes.map(({ name, picture, price }) => (
		<DishCard key={name} name={name} picture={picture} price={price} />
	));

	return (
		<Container>
			<CategoryWrapper>
				<AppIcon name="food-menu" color={theme.colors.text} size={25} />

				<CategoryName>{category}</CategoryName>
			</CategoryWrapper>
			<DishesList>{dishes_list}</DishesList>
		</Container>
	);
}

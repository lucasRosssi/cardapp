import React from 'react';
import { useTheme } from 'styled-components';
import { DishDTO } from '../../dtos/EstablishmentDTO';

import { AppIcon } from '../AppIcon';
import { DishCard } from '../DishCard';

import { CategoryName, CategoryWrapper, Container, DishesList } from './styles';

interface CategoryDishesProps {
	category: string;
	dishes: DishDTO[];
}

export function CategoryDishes({ category, dishes }: CategoryDishesProps) {
	const theme = useTheme();

	const dishes_list = dishes.map(({ name, picture, price, details }) => (
		<DishCard
			key={name}
			name={name}
			picture={picture}
			price={price}
			details={details}
		/>
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

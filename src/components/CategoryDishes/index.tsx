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

	return (
		<Container>
			<CategoryWrapper>
				<AppIcon name="food-menu" color={theme.colors.text} size={25} />

				<CategoryName>{category}</CategoryName>
			</CategoryWrapper>
			<DishesList
				data={dishes}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<DishCard
						id={item.id}
						name={item.name}
						picture={item.picture}
						price={item.price}
						details={item.details}
						like_count={item.like_count}
					/>
				)}
				initialNumToRender={4}
			/>
		</Container>
	);
}

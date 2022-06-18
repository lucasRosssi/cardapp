import React, { useCallback, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { DishDTO } from '../../dtos/EstablishmentDTO';

import { AppIcon } from '../AppIcon';
import { DishCard } from '../DishCard';
import { LoadingIndicator } from '../LoadingIndicator';

import { CategoryName, CategoryWrapper, Container, DishesList } from './styles';

interface CategoryDishesProps {
	category: string;
	dishes: DishDTO[];
}

export function CategoryDishes({ category, dishes }: CategoryDishesProps) {
	const theme = useTheme();

	const [slicedDishes, setSlicedDishes] = useState(dishes.slice(0, 10));
	const [sliceStartIndex, setSliceStartIndex] = useState(10);
	const [sliceEndIndex, setSliceEndIndex] = useState(20);

	const getNextDishes = useCallback(() => {
		const nextDishes = dishes.slice(sliceStartIndex, sliceEndIndex);

		setSlicedDishes((oldState) => [...oldState, ...nextDishes]);
		setSliceStartIndex((oldState) => oldState + 10);
		setSliceEndIndex((oldState) => oldState + 10);
	}, []);

	const isThereMoreItems = useMemo(
		() => slicedDishes.length < dishes.length,
		[slicedDishes, dishes]
	);

	return (
		<Container>
			<CategoryWrapper>
				<AppIcon name="food-menu" color={theme.colors.text} size={25} />

				<CategoryName>{category}</CategoryName>
			</CategoryWrapper>
			<DishesList
				data={slicedDishes}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<DishCard
						name={item.name}
						picture={item.picture}
						price={item.price}
						details={item.details}
						like_count={item.like_count}
						onPress={() => {}}
					/>
				)}
				ListFooterComponent={isThereMoreItems ? <LoadingIndicator /> : <></>}
				onEndReached={isThereMoreItems ? getNextDishes : undefined}
			/>
		</Container>
	);
}

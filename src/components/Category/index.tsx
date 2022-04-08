import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import { DishDTO } from '../../dtos/EstablishmentDTO';
import { AppIcon } from '../AppIcon';

import { Container, Title } from './styles';

interface CategoryProps {
	id: string;
	category: string;
	dishes: DishDTO[];
}

export function Category({ id, category, dishes }: CategoryProps) {
	const theme = useTheme();
	const { navigate } = useNavigation();

	function handleChooseCategory() {}

	return (
		<Container onPress={handleChooseCategory}>
			<Title testID="category">{category}</Title>
			<AppIcon name="chevron-right" color={theme.colors.primary} />
		</Container>
	);
}

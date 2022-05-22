import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import { DishDTO } from '../../dtos/EstablishmentDTO';
import { AppIcon } from '../AppIcon';

import { Container, Title } from './styles';

interface CategoryProps {
	category: string;
	dishes: DishDTO[];
	onPress: () => void;
}

export function Category({ category, dishes, onPress }: CategoryProps) {
	const theme = useTheme();

	return (
		<Container onPress={onPress}>
			<Title testID="category">{category}</Title>
			<AppIcon name="chevron-right" color={theme.colors.primary} />
		</Container>
	);
}

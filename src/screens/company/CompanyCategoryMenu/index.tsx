import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { AppIcon } from '../../../components/AppIcon';
import { DishCard } from '../../../components/DishCard';
import { Header } from '../../../components/Header';

import {
	AddItemButton,
	Container,
	TitleWrapper,
	Title,
	DishesList,
} from './styles';

export function CompanyCategoryMenu() {
	const theme = useTheme();
	const { navigate } = useNavigation();

	const list = [
		{
			name: 'Caipirinha',
			price: 20,
			picture:
				'https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/9/3/1532640931039.jpg',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ipsam ullam, quisquam nesciunt officiis nostrum optio dolorem voluptate soluta facilis hic ut! Corporis eligendi labore perspiciatis, dicta expedita sit suscipit.',
			like_count: 113,
		},
	];

	function handleAddNewItem() {
		navigate('CompanyDishDetails');
	}

	return (
		<>
			<Header />
			<Container>
				<TitleWrapper>
					<AppIcon name="food-menu" color={theme.colors.primary} />
					<Title>Drinks</Title>
				</TitleWrapper>

				<DishesList
					data={list}
					keyExtractor={(item) => String(item)}
					renderItem={({ item }) => (
						<DishCard
							name={item.name}
							price={item.price}
							picture={item.picture}
							details={item.details}
							like_count={item.like_count}
						/>
					)}
				/>

				<AddItemButton testID="button-add" onPress={handleAddNewItem}>
					<AppIcon name="plus" color={theme.colors.primary} />
				</AddItemButton>
			</Container>
		</>
	);
}

import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { useAuth } from '../../../hooks/useAuth';

import { api } from '../../../services/api';

import { Header } from '../../../components/Header';
import { AppIcon } from '../../../components/AppIcon';
import { LoadingIndicator } from '../../../components/LoadingIndicator';
import { DishCard } from '../../../components/DishCard';
import { DishDTO } from '../../../dtos/EstablishmentDTO';

import {
	AddItemButton,
	Container,
	TitleWrapper,
	Title,
	DishesList,
} from './styles';

export interface CompanyCategoryMenuParams {
	category: string;
}

export function CompanyCategoryMenu() {
	const theme = useTheme();
	const { params: routeParams } = useRoute();
	const { navigate } = useNavigation();
	const { company } = useAuth();

	const [isLoading, setIsLoading] = useState(true);
	const [menu, setMenu] = useState<DishDTO[]>([]);

	const params = useMemo(
		() => routeParams as CompanyCategoryMenuParams,
		[routeParams]
	);

	function handleAddNewItem() {
		navigate('CompanyDishDetails', {
			category: params.category,
			menu,
			setMenu,
			isEditing: false,
		});
	}

	function handleViewItem(item: DishDTO) {
		navigate('CompanyDishDetails', {
			...item,
			category: params.category,
			menu,
			setMenu,
			isEditing: true,
		});
	}

	useEffect(() => {
		async function fetchCategoryMenu() {
			const response = await api.get(
				`/establishments/${company.id}/menu/${params.category}/dishes`
			);

			setMenu(response.data);
			setIsLoading(false);
		}

		fetchCategoryMenu();
	}, []);

	return (
		<>
			<Header />
			<Container>
				<TitleWrapper>
					<AppIcon name="food-menu" color={theme.colors.primary} />
					<Title>{params.category}</Title>
				</TitleWrapper>

				{isLoading ? (
					<LoadingIndicator />
				) : (
					<DishesList
						data={menu}
						keyExtractor={(item) => item.name}
						renderItem={({ item }) => (
							<DishCard
								name={item.name}
								price={item.price}
								picture={item.picture}
								details={item.details}
								like_count={item.like_count}
								onPress={() => handleViewItem(item)}
							/>
						)}
					/>
				)}

				<AddItemButton testID="button-add" onPress={handleAddNewItem}>
					<AppIcon name="plus" color={theme.colors.primary} />
				</AddItemButton>
			</Container>
		</>
	);
}

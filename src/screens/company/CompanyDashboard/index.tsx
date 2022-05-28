import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';

import { api } from '../../../services/api';
import { MenuDTO } from '../../../dtos/EstablishmentDTO';

import { AppIcon } from '../../../components/AppIcon';
import { Category } from '../../../components/Category';
import { Header } from '../../../components/Header';
import { NewCategoryModal } from '../../../components/NewCategoryModal';

import { Container, CategoriesList, AddCategoryButton, Title } from './styles';

export function CompanyDashboard() {
	const theme = useTheme();
	const { company } = useAuth();
	const { navigate } = useNavigation();

	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isInputLoading, setIsInputLoading] = useState(false);
	const [categories, setCategories] = useState<MenuDTO[]>([]);

	function handleCloseModal() {
		setIsVisible(false);
	}

	function handleAddNewCategory() {
		setIsVisible(true);
	}

	function handleGoToCategory(category: string) {
		navigate('CompanyCategoryMenu', { category });
	}

	async function handleCreateNewCategory(category: string) {
		setIsInputLoading(true);

		const data = {
			category,
			dishes: [],
		};

		setCategories([...categories, data]);

		await api.post(`/establishments/${company.id}/menu`, data);

		setIsInputLoading(false);
	}

	useEffect(() => {
		async function fetchCategories() {
			try {
				const { data } = await api.get(`/establishments/${company.id}/menu`);
				setCategories(data);
				setIsLoading(false);
			} catch (error: any) {
				Alert.alert('', error.message);
			}
		}

		fetchCategories();
	}, []);

	return (
		<Container>
			<Header />

			{isLoading ? (
				<>
					<Title style={{ padding: 20 }}>Categorias</Title>
					<ActivityIndicator color={theme.colors.primary} size={50} />
				</>
			) : (
				<CategoriesList
					ListHeaderComponent={<Title>Categorias</Title>}
					data={categories}
					keyExtractor={(item) => item.category}
					renderItem={({ item }) => (
						<Category
							onPress={() => handleGoToCategory(item.category)}
							category={item.category}
							dishes={item.dishes}
						/>
					)}
				/>
			)}

			<AddCategoryButton testID="button-add" onPress={handleAddNewCategory}>
				<AppIcon name="plus" color={theme.colors.primary} />
			</AddCategoryButton>

			<NewCategoryModal
				testID="modal-add-category"
				isVisible={isVisible}
				closeModal={handleCloseModal}
				isLoading={isInputLoading}
				addCategory={handleCreateNewCategory}
			/>
		</Container>
	);
}

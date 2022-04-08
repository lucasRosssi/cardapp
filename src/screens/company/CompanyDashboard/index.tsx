import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { AppIcon } from '../../../components/AppIcon';
import { Category } from '../../../components/Category';
import { Header } from '../../../components/Header';
import { NewCategoryModal } from '../../../components/NewCategoryModal';
import { MenuDTO } from '../../../dtos/EstablishmentDTO';
import { useAuth } from '../../../hooks/useAuth';
import { api } from '../../../services/api';

import { Container, CategoriesList, AddCategoryButton, Title } from './styles';

export function CompanyDashboard() {
	const theme = useTheme();
	const { company } = useAuth();

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

	async function handleCreateNewCategory(category: string) {
		setIsInputLoading(true);

		const data = {
			id: String(categories.length + 1),
			category,
			dishes: [],
		};

		setCategories([...categories, data]);

		await api.put(`/establishments/${company.id}`, {
			...company,
			menu: [...categories, data],
		});

		setIsInputLoading(false);
	}

	useEffect(() => {
		async function fetchCategories() {
			const response = await api.get(`/establishments/${company.id}`);
			setCategories(response.data.menu);
			setIsLoading(false);
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
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Category
							id={item.id}
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

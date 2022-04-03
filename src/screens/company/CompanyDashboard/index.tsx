import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { AppIcon } from '../../../components/AppIcon';
import { Category } from '../../../components/Category';
import { Header } from '../../../components/Header';
import { MenuDTO } from '../../../dtos/EstablishmentDTO';
import { useAuth } from '../../../hooks/useAuth';
import { api } from '../../../services/api';

import { Container, CategoriesList, AddCategoryButton, Title } from './styles';

export function CompanyDashboard() {
	const theme = useTheme();
	const { company } = useAuth();

	const [isLoading, setIsLoading] = useState(true);
	const [categories, setCategories] = useState<MenuDTO[]>([]);

	async function fetchCategories() {
		const response = await api.get(`/establishments/${company.id}`);
		setCategories(response.data.menu);
		setIsLoading(false);
	}

	useEffect(() => {
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

			<AddCategoryButton>
				<AppIcon name="plus" color={theme.colors.primary} />
			</AddCategoryButton>
		</Container>
	);
}

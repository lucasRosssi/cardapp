import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { AppIcon } from '../../../components/AppIcon';
import { DishCard } from '../../../components/DishCard';

import { Header } from '../../../components/Header';

import {
	Container,
	Content,
	Title,
	Categories,
	CategoryWrapper,
	CategoryName,
} from './styles';

export function DishesMenu() {
	const theme = useTheme();

	const seafood_dishes = [
		{
			name: 'Camarão na Moranga',
			picture:
				'http://s2.glbimg.com/2bYPQwzADk77RnR-K81SZHBVMgg=/smart/e.glbimg.com/og/ed/f/original/2015/07/27/receita-moranga-camarao-edir-nascimento-01.jpg',
			price: 120,
		},
		{
			name: 'Risoto de Camarão e Abobrinha',
			picture:
				'https://www.vaisefood.com/wp-content/uploads/2013/04/Risotto-Gamberi-e-Zucchini.jpg',
			price: 80,
		},
		{
			name: 'Bisque de Lagosta',
			picture: 'https://idata.hiloved.com/imgs/52609fc3f8c82ff2-1024x681.jpg',
			price: 110,
		},
		{
			name: 'Acarajé',
			picture:
				'https://rodoviariaonline.com.br/wp-content/uploads/2018/10/voce-nao-pode-deixar-passar-festas-4-comidas-tipicas-de-salvador-5-640x427.jpg',
			price: 70,
		},
	];
	const mexican_dishes = [
		{
			name: 'Tacos',
			picture:
				'https://img.itdg.com.br/tdg/images/recipes/000/073/984/347923/347923_original.jpg',
			price: 40,
		},
		{
			name: 'Burritos',
			picture:
				'https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2847-e7b65a5775641aa780fa2b34b5a624e4.jpg',
			price: 45,
		},
		{
			name: 'Nachos com Guacamole',
			picture:
				'https://www.selecoes.com.br/wp-content/uploads/2021/01/iStock-529669952-724x420.jpg',
			price: 42,
		},
	];

	const dishes_menu = [
		{
			category: 'Frutos do Mar',
			dishes: seafood_dishes,
		},
		{
			category: 'Comida Mexicana',
			dishes: mexican_dishes,
		},
	];

	const categories_list = dishes_menu.map(({ category, dishes }) => {
		const dishes_list = dishes.map(({ name, picture, price }) => (
			<DishCard key={name} name={name} picture={picture} price={price} />
		));

		return (
			<>
				<CategoryWrapper>
					<AppIcon name="food-menu" color={theme.colors.text} size={25} />

					<CategoryName>{category}</CategoryName>
				</CategoryWrapper>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						paddingHorizontal: 40,
						paddingVertical: 20,
						marginBottom: 20,
					}}
				>
					{dishes_list}
				</ScrollView>
			</>
		);
	});

	return (
		<Container>
			<Header />

			<Content>
				<Title>Restaurante Tudo de Bom</Title>

				<Categories>{categories_list}</Categories>
			</Content>
		</Container>
	);
}

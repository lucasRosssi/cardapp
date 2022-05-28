import React, { useMemo, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { api } from '../../../services/api';

import { Header } from '../../../components/Header';
import { InteractionBar } from '../../../components/InteractionBar';
import { CommentsModal } from '../../../components/CommentsModal';
import { AppIcon } from '../../../components/AppIcon';
import { Button } from '../../../components/Button';

import { DishDTO } from '../../../dtos/EstablishmentDTO';

import {
	Container,
	DishHeader,
	NameInput,
	PriceInput,
	ImageSlider,
	Picture,
	Content,
	DetailsInput,
	NoPicture,
	ChangePicture,
	DetailsInputContainer,
} from './styles';
import { useAuth } from '../../../hooks/useAuth';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';

export interface CompanyDishDetailsParams {
	menu: DishDTO[];
	setMenu: (menu: DishDTO[]) => void;
	category: string;
	isEditing: boolean;
	name?: string;
	price?: number;
	picture?: string;
	details?: string;
}

interface FormData {
	name: string;
	price: number;
	details: string;
}

const schema = Yup.object().shape({
	name: Yup.string().required(),
	price: Yup.number().required(),
	details: Yup.string().notRequired(),
});

export function CompanyDishDetails() {
	const theme = useTheme();
	const { company } = useAuth();
	const { params: routeParams } = useRoute();
	const params = useMemo(
		() => routeParams as CompanyDishDetailsParams,
		[routeParams]
	);
	const { goBack } = useNavigation();
	const detailsInput = useRef<TextInput>(null);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
		defaultValues: {
			name: params?.name || '',
			price: params?.price || '',
			details: params?.details || '',
		},
	});

	const [picture, setPicture] = useState(params?.picture || '');

	async function handleChangePicture() {
		let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setPicture(result.uri);
		}
	}

	async function handleCreateNewDish(form: FormData) {
		try {
			const data = {
				name: form.name,
				price: form.price,
				picture,
				details: form.details,
			};

			if (!params?.isEditing) {
				await api.post(
					`/establishments/${company.id}/menu/${params.category}/dishes`,
					data
				);
				const newDish: DishDTO = {
					...data,
					like_count: 0,
				};

				params.setMenu([...params.menu, newDish]);
			} else {
				/* await api.put(
					`/establishments/${company.id}/menu/${params.category}/dishes/`
				); */

				const dish: DishDTO | undefined = params.menu.find(
					(dish) => dish.name === form.name
				);
				Object.assign(dish, {
					...data,
				});

				params.setMenu([...params.menu]);
			}

			goBack();
		} catch (error) {
			if (axios.isAxiosError(error)) {
				Alert.alert('', error.message);
			} else {
				Alert.alert('', 'Ocorreu um erro no sistema');
			}
		}
	}

	return (
		<>
			<Header />
			<Container>
				<Content>
					<DishHeader>
						<NameInput
							control={control}
							topPlaceholder="Nome"
							name="name"
							defaultValue={params?.name}
						/>
						<PriceInput
							control={control}
							topPlaceholder="Preço"
							name="price"
							keyboardType="numeric"
							defaultValue={params.price ? String(params.price) : undefined}
							clearTextOnFocus
						/>
					</DishHeader>

					{picture ? (
						<ImageSlider>
							<Picture
								source={{
									uri: picture,
								}}
							/>

							<ChangePicture onPress={handleChangePicture}>
								<AppIcon name="camera" color={theme.colors.full_light} />
							</ChangePicture>
						</ImageSlider>
					) : (
						<NoPicture>
							<AppIcon
								name="random-food"
								size={85}
								color={theme.colors.full_light}
							/>

							<ChangePicture onPress={handleChangePicture}>
								<AppIcon name="camera" color={theme.colors.full_light} />
							</ChangePicture>
						</NoPicture>
					)}

					<DetailsInputContainer onPress={detailsInput.current?.focus}>
						<DetailsInput
							ref={detailsInput}
							control={control}
							topPlaceholder="Detalhes"
							name="details"
							defaultValue={params?.details}
						/>
					</DetailsInputContainer>

					<Button title="Salvar" onPress={handleSubmit(handleCreateNewDish)} />
				</Content>
			</Container>
		</>
	);
}

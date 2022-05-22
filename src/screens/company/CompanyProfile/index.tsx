import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import * as ImagePicker from 'expo-image-picker';

import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { AppIcon } from '../../../components/AppIcon';

import { api } from '../../../services/api';

import {
	Container,
	Profile,
	Picture,
	Image,
	CameraWrapper,
	FormWrapper,
} from './styles';

interface FormData {
	name: string;
	address: string;
	phone: string;
}

const schema = Yup.object().shape({
	name: Yup.string().required('É necessário digitar o nome do estabelecimento'),
	address: Yup.string().required('É necessário digitar o endereço'),
	phone: Yup.string().required('É necessário digitar um número de telefone'),
});

export function CompanyProfile() {
	const theme = useTheme();
	const { company, handleUpdateCompany } = useAuth();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
		defaultValues: {
			name: company.name,
			address: company.address,
			phone: company.phone,
		},
	});

	const [isKeyboardShown, setIsKeyboardShown] = useState(false);
	const [picture, setPicture] = useState(company.picture);

	async function handleChangeProfilePicture() {
		let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 4],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setPicture(result.uri);
			handleUpdateCompany({
				...company,
				picture: result.uri,
			});
		}
	}

	async function handleUpdateChanges(form: FormData) {
		try {
			const data = {
				picture,
				name: form.name.trim(),
				address: form.address.trim(),
				phone: form.phone.trim(),
			};

			await api.put(`/establishments/${company.id}`, data);
		} catch (error: any) {
			Alert.alert('Erro', error.message);
		}
	}

	useEffect(() => {
		const showKeyboard = Keyboard.addListener('keyboardDidShow', () =>
			setIsKeyboardShown(true)
		);
		const hideKeyboard = Keyboard.addListener('keyboardDidHide', () =>
			setIsKeyboardShown(false)
		);

		return () => {
			setIsKeyboardShown(false);
			Keyboard.removeSubscription(showKeyboard);
			Keyboard.removeSubscription(hideKeyboard);
		};
	}, []);

	return (
		<>
			<Header />

			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					{!isKeyboardShown ? (
						<Profile>
							<Picture onPress={handleChangeProfilePicture}>
								<Image source={{ uri: picture }} />

								<CameraWrapper>
									<AppIcon name="camera" size={20} color={theme.colors.shape} />
								</CameraWrapper>
							</Picture>
						</Profile>
					) : (
						<Profile />
					)}

					<FormWrapper>
						<Input
							control={control}
							name="name"
							topPlaceholder="Nome"
							error={errors.name?.message}
							defaultValue={company.name}
						/>
						<Input
							control={control}
							name="address"
							topPlaceholder="Endereço"
							error={errors.address?.message}
							defaultValue={company.address}
						/>
						<Input
							control={control}
							name="phone"
							topPlaceholder="Telefone"
							error={errors.phone?.message}
							keyboardType="numeric"
							defaultValue={company.phone}
						/>
					</FormWrapper>

					<Button title="Salvar" onPress={handleSubmit(handleUpdateChanges)} />
				</Container>
			</TouchableWithoutFeedback>
		</>
	);
}

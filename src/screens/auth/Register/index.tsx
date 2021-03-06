import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';
import { useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../../components/Button';
import { AppIcon } from '../../../components/AppIcon';
import { Input } from '../../../components/Input';

import { UserDTO } from '../../../dtos/UserDTO';
import { EstablishmentDTO } from '../../../dtos/EstablishmentDTO';

import {
	CameraWrapper,
	Container,
	Form,
	Image,
	Picture,
	Profile,
	NoPicture,
} from './styles';
import axios from 'axios';

interface FormData {
	email: string;
	password: string;

	full_name: string;
	city: string;

	name: string;
	address: string;
	phone: string;
}

interface Params {
	isClient: boolean;
}

const schema = Yup.object().shape({
	email: Yup.string()
		.email('Digite um email válido')
		.required('É necessário digitar um email'),
	password: Yup.string()
		.required('É necessário digitar uma senha')
		.min(8, 'A senha deve conter no mínimo 8 caracteres'),

	full_name: Yup.string().required('É necessário digitar o seu nome'),
	city: Yup.string().required('É necessário digitar sua cidade'),

	name: Yup.string().required('É necessário digitar o nome do estabelecimento'),
	address: Yup.string().required('É necessário digitar o endereço'),
	phone: Yup.string().required('É necessário digitar um número de telefone'),
});

export function Register() {
	const theme = useTheme();
	const { createNewUser, createNewCompany, setUser, setCompany } = useAuth();
	const route = useRoute();
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
	});

	const [picture, setPicture] = useState('');
	const [isKeyboardShown, setIsKeyboardShown] = useState(false);
	const { isClient } = route.params as Params;

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
		}
	}

	async function handleRegister(form: FormData) {
		if (isClient) {
			const firstName = form.full_name.trim().split(' ')[0];

			try {
				const user: UserDTO = {
					email: form.email.trim(),
					full_name: form.full_name.trim(),
					first_name: firstName,
					city: form.city.trim(),
					picture,
				};

				await createNewUser(user);
			} catch (error: any) {
				Alert.alert('Erro', error.message);
			}
		} else {
			try {
				const establishment: EstablishmentDTO = {
					email: form.email.trim(),
					name: form.name.trim(),
					address: form.address.trim(),
					picture,
					phone: form.phone,
				};

				await createNewCompany(establishment);
			} catch (error) {
				if (axios.isAxiosError(error)) {
					Alert.alert('', error.message);
				} else {
					Alert.alert('', 'Ocorreu um erro, tente novamente');
				}
			}
		}
	}

	useEffect(() => {
		if (isClient) {
			setValue('name', 'notRequired');
			setValue('address', 'notRequired');
			setValue('phone', 'notRequired');
		} else {
			setValue('full_name', 'notRequired');
			setValue('city', 'notRequired');
		}
	}, []);

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
		<Container>
			<StatusBar barStyle="dark-content" />
			<KeyboardAvoidingView behavior="padding">
				{!isKeyboardShown ? (
					<Profile>
						<Picture onPress={handleChangeProfilePicture}>
							{picture ? (
								<Image source={{ uri: picture }} />
							) : (
								<NoPicture>
									<AppIcon name="user" size={50} color={theme.colors.primary} />
								</NoPicture>
							)}

							<CameraWrapper>
								<AppIcon name="camera" size={20} color={theme.colors.shape} />
							</CameraWrapper>
						</Picture>
					</Profile>
				) : (
					<Profile />
				)}

				<Form>
					<Input
						control={control}
						name="email"
						topPlaceholder="E-mail"
						keyboardType="email-address"
						autoCapitalize="none"
						style={{ marginBottom: 20 }}
						error={errors.email?.message}
					/>
					<Input
						name="password"
						control={control}
						topPlaceholder="Senha"
						secureTextEntry
						error={errors.password?.message}
					/>
				</Form>

				{isClient ? (
					<Form>
						<Input
							control={control}
							name="full_name"
							topPlaceholder="Nome completo"
							autoCapitalize="sentences"
							style={{ marginBottom: 20 }}
							error={errors.full_name?.message}
						/>
						<Input
							name="city"
							control={control}
							topPlaceholder="Cidade"
							error={errors.city?.message}
						/>
					</Form>
				) : (
					<Form>
						<Input
							control={control}
							name="name"
							topPlaceholder="Nome do estabelecimento"
							autoCapitalize="sentences"
							style={{ marginBottom: 20 }}
							error={errors.name?.message}
						/>
						<Input
							name="address"
							control={control}
							topPlaceholder="Endereço"
							style={{ marginBottom: 20 }}
							error={errors.address?.message}
						/>
						<Input
							name="phone"
							control={control}
							topPlaceholder="Telefone"
							keyboardType="numeric"
							error={errors.phone?.message}
						/>
					</Form>
				)}

				<Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
			</KeyboardAvoidingView>
		</Container>
	);
}

import 'react-native-get-random-values';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';

import { Input } from '../../../components/Input';

import {
	CameraWrapper,
	Container,
	Form,
	Image,
	Picture,
	Profile,
	NoPicture,
} from './styles';
import { Button } from '../../../components/Button';
import { AppIcon } from '../../../components/AppIcon';
import { useTheme } from 'styled-components/native';
import { Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { UserDTO } from '../../../dtos/UserDTO';

interface FormData {
	email: string;
	password: string;
	full_name: string;
	city: string;
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
});

export function Register() {
	const theme = useTheme();
	const { createNewUser } = useAuth();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
	});

	const [picture, setPicture] = useState('');
	const [isKeyboardShown, setIsKeyboardShown] = useState(false);

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

	function handleRegister(form: FormData) {
		const firstName = form.full_name.trim().split(' ')[0];

		try {
			const user: UserDTO = {
				id: uuidv4(),
				email: form.email.trim(),
				full_name: form.full_name.trim(),
				first_name: firstName,
				city: form.city.trim(),
				picture,
			};

			createNewUser(user);
		} catch (error) {
			throw new Error('Failed to create new user account');
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
						error={errors.email && errors.email.message}
					/>
					<Input
						name="password"
						control={control}
						topPlaceholder="Senha"
						secureTextEntry
						error={errors.password && errors.password.message}
					/>
				</Form>

				<Form>
					<Input
						control={control}
						name="full_name"
						topPlaceholder="Nome completo"
						autoCapitalize="sentences"
						style={{ marginBottom: 20 }}
						error={errors.full_name && errors.full_name.message}
					/>
					<Input
						name="city"
						control={control}
						topPlaceholder="Cidade"
						error={errors.city && errors.city.message}
					/>
				</Form>

				<Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
			</KeyboardAvoidingView>
		</Container>
	);
}

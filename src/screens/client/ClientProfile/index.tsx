import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { AppIcon } from '../../../components/AppIcon';

import {
	Container,
	Profile,
	Picture,
	Image,
	CameraWrapper,
	FormWrapper,
} from './styles';

interface FormData {
	full_name: string;
	city: string;
}

const schema = Yup.object().shape({
	full_name: Yup.string().required('É necessário digitar um nome'),
	city: Yup.string().required('É necessário digitar uma cidade'),
});

export function ClientProfile() {
	const theme = useTheme();
	const { user, handleUpdateUser } = useAuth();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
	});

	const [picture, setPicture] = useState(user.picture);

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
			handleUpdateUser({
				...user,
				picture: result.uri,
			});
		}
	}

	function handleUpdateChanges(form: FormData) {
		const formattedFullName = form.full_name.trim();
		const firstName = formattedFullName.split(' ')[0];

		handleUpdateUser({
			...user,
			full_name: form.full_name,
			first_name: firstName,
			city: form.city,
			picture,
		});

		Alert.alert('', 'Dados salvos com sucesso!');
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
							name="full_name"
							topPlaceholder="Nome"
							error={errors.full_name && errors.full_name.message}
						/>
						<Input
							control={control}
							name="city"
							topPlaceholder="Cidade"
							error={errors.city && errors.city.message}
						/>
					</FormWrapper>

					<Button title="Salvar" onPress={handleSubmit(handleUpdateChanges)} />
				</Container>
			</TouchableWithoutFeedback>
		</>
	);
}

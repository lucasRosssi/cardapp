import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import {
	Container,
	Profile,
	Picture,
	Image,
	CameraWrapper,
	FormWrapper,
} from './styles';
import { AppIcon } from '../../../components/AppIcon';

export function MyProfile() {
	const theme = useTheme();
	const { user, handleUpdateUser } = useAuth();
	const { navigate } = useNavigation();

	const [picture, setPicture] = useState(user.picture);
	const [fullName, setFullName] = useState(user.full_name);
	const [fullNameError, setFullNameError] = useState('');
	const [city, setCity] = useState(user.city);
	const [cityError, setCityError] = useState('');

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

	function handleTypeName(value: string) {
		setFullName(value);
		if (fullNameError) {
			setFullNameError('');
		}
	}

	function handleTypeCity(value: string) {
		setCity(value);
		if (cityError) {
			setCityError('');
		}
	}

	function handleUpdateChanges() {
		if (!fullName) {
			setFullNameError('É necessário digitar um nome');
		}
		if (!city) {
			setCityError('É necessário digitar uma cidade');
		}

		if (!fullName || !city) {
			return;
		}

		const formattedFullName = fullName.trim();
		const firstName = formattedFullName.split(' ')[0];

		handleUpdateUser({
			...user,
			full_name: fullName,
			first_name: firstName,
			city,
			picture,
		});
		setFullName(fullName.trim());

		navigate('Dashboard');
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
							topPlaceholder="Nome"
							value={fullName}
							onChangeText={handleTypeName}
							error={fullNameError}
						/>
						<Input
							topPlaceholder="Cidade"
							value={city}
							onChangeText={handleTypeCity}
							error={cityError}
						/>
					</FormWrapper>

					<Button title="Salvar" onPress={handleUpdateChanges} />
				</Container>
			</TouchableWithoutFeedback>
		</>
	);
}

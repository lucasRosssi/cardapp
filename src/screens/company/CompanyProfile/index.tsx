import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';

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

export function CompanyProfile() {
	const theme = useTheme();
	const { company, handleUpdateCompany } = useAuth();

	const [picture, setPicture] = useState(company.picture);
	const [name, setName] = useState(company.name);
	const [address, setAddress] = useState(company.address);
	const [email, setEmail] = useState(company.email);
	const [phone, setPhone] = useState(company.phone);
	const [nameError, setNameError] = useState('');
	const [addressError, setAddressError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [phoneError, setPhoneError] = useState('');

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
			handleUpdateCompany({
				...company,
				picture: result.uri,
			});
		}
	}

	function handleTypeName(value: string) {
		setName(value);
		if (nameError) {
			setNameError('');
		}
	}

	function handleTypeAddress(value: string) {
		setAddress(value);
		if (addressError) {
			setAddressError('');
		}
	}

	function handleTypeEmail(value: string) {
		setEmail(value);
		if (emailError) {
			setEmailError('');
		}
	}

	function handleTypePhone(value: string) {
		setPhone(value);
		if (phoneError) {
			setPhoneError('');
		}
	}

	function handleUpdateChanges() {
		if (!name) {
			setNameError('É necessário digitar um nome');
		}
		if (!address) {
			setAddressError('É necessário digitar um endereço');
		}
		if (!email) {
			setEmailError('É necessário digitar um email');
		}
		if (!phone) {
			setPhoneError('É necessário digitar um telefone');
		}

		if (!name || !address || !email || !phone) {
			return;
		}

		const formattedName = name.trim();
		const formattedAddress = address.trim();
		const formattedEmail = email.trim();
		const formattedPhone = phone.trim();

		handleUpdateCompany({
			...company,
			name: formattedName,
			address: formattedAddress,
			picture,
			email: formattedEmail,
			phone: formattedPhone,
		});
		setName(name.trim());

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
							topPlaceholder="Nome"
							value={name}
							onChangeText={handleTypeName}
							error={nameError}
						/>
						<Input
							topPlaceholder="Endereço"
							value={address}
							onChangeText={handleTypeAddress}
							error={addressError}
						/>
						<Input
							topPlaceholder="E-mail"
							value={email}
							onChangeText={handleTypeEmail}
							error={emailError}
							keyboardType="email-address"
						/>
						<Input
							topPlaceholder="Telefone"
							value={phone}
							onChangeText={handleTypePhone}
							error={phoneError}
							keyboardType="numeric"
						/>
					</FormWrapper>

					<Button title="Salvar" onPress={handleUpdateChanges} />
				</Container>
			</TouchableWithoutFeedback>
		</>
	);
}

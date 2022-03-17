import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

import * as ImagePicker from 'expo-image-picker';

import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { Container, Profile, Picture, Image, FormWrapper } from './styles';
import { KeyboardAvoidingView } from 'react-native';

export function MyProfile() {
	const { user, handleUpdateUser } = useAuth();
	const [picture, setPicture] = useState(user.picture);
	const [fullName, setFullName] = useState(user.full_name);
	const [fullNameError, setFullNameError] = useState('');

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

	function handleTypeOnInput(value: string) {
		setFullName(value);
		if (fullNameError) {
			setFullNameError('');
		}
	}

	function handleUpdateChanges() {
		if (!fullName) {
			setFullNameError('É necessário colocar um nome');
			return;
		}
		const formattedFullName = fullName.trim();
		const firstName = formattedFullName.split(' ')[0];

		handleUpdateUser({
			...user,
			full_name: fullName,
			first_name: firstName,
			picture,
		});
		setFullName(fullName.trim());
	}

	return (
		<>
			<Header />
			<KeyboardAvoidingView behavior="position">
				<Container>
					<Profile>
						<Picture onPress={handleChangeProfilePicture}>
							<Image source={{ uri: picture }} />
						</Picture>
					</Profile>

					<FormWrapper>
						<Input
							topPlaceholder="Nome"
							value={fullName}
							onChangeText={(value) => handleTypeOnInput(value)}
							error={fullNameError}
						/>
						<Input topPlaceholder="E-mail" />
					</FormWrapper>

					<Button title="Salvar" onPress={handleUpdateChanges} />
				</Container>
			</KeyboardAvoidingView>
		</>
	);
}

import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

import { Header } from '../../../components/Header';

import { Container, Profile, Picture, Image, Name } from './styles';
import { useAuth } from '../../../hooks/useAuth';

export function MyProfile() {
	const { user, handleUpdateUser } = useAuth();
	const [picture, setPicture] = useState(user.picture);

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

	return (
		<Container>
			<Header />
			<Profile>
				<Picture onPress={handleChangeProfilePicture}>
					<Image source={{ uri: picture }} />
				</Picture>

				<Name>Lucas Rossi</Name>
			</Profile>
		</Container>
	);
}

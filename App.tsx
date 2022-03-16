import React from 'react';
import AppLoading from 'expo-app-loading';

import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import { useFonts } from 'expo-font';
import {
	Poppins_400Regular,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
	Rajdhani_400Regular,
	Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

import { AuthProvider } from './src/contexts/AuthContext';

import { Routes } from './src/routes';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
		Rajdhani_400Regular,
		Rajdhani_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<StatusBar
					translucent
					backgroundColor="transparent"
					barStyle="light-content"
				/>
				<Routes />
			</ThemeProvider>
		</AuthProvider>
	);
}

import React from 'react';

import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface AppIconProps {
	name: 'menu' | 'settings' | 'location' | 'food-menu' | 'gallery';
	size?: number;
	color?: string;
}

export function AppIcon({ name, size = RFValue(30), color }: AppIconProps) {
	return (
		<>
			{name === 'menu' && (
				<Feather name="menu" size={RFValue(size)} color={color} />
			)}
			{name === 'settings' && (
				<Ionicons name="settings-sharp" size={RFValue(size)} color={color} />
			)}
			{name === 'location' && (
				<Ionicons name="location-sharp" size={RFValue(size)} color={color} />
			)}
			{name === 'food-menu' && (
				<MaterialIcons name="menu-book" size={RFValue(size)} color={color} />
			)}
			{name === 'gallery' && (
				<Ionicons name="camera" size={RFValue(size)} color={color} />
			)}
		</>
	);
}

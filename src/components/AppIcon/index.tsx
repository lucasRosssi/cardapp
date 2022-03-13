import React from 'react';

import { Feather, Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface AppIconProps {
	name: 'menu' | 'settings' | 'location';
	size?: number;
	color?: string;
}

export function AppIcon({ name, size, color }: AppIconProps) {
	return (
		<>
			{name === 'menu' && (
				<Feather
					name="menu"
					size={size ? RFValue(size) : RFValue(30)}
					color={color}
				/>
			)}
			{name === 'settings' && (
				<Ionicons
					name="settings-sharp"
					size={size ? RFValue(size) : RFValue(30)}
					color={color}
				/>
			)}
			{name === 'location' && (
				<Ionicons
					name="location-sharp"
					size={size ? RFValue(size) : RFValue(30)}
					color={color}
				/>
			)}
		</>
	);
}

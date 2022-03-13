import React from 'react';

import { Feather, Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface AppIconProps {
	name: 'menu' | 'settings';
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
		</>
	);
}

import React from 'react';

import {
	Feather,
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
	AntDesign,
} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface AppIconProps {
	name:
		| 'chevron-down'
		| 'comment'
		| 'food-menu'
		| 'gallery'
		| 'info'
		| 'like-fill'
		| 'like-outline'
		| 'location'
		| 'menu'
		| 'settings';
	size?: number;
	color?: string;
}

export function AppIcon({ name, size = RFValue(30), color }: AppIconProps) {
	return (
		<>
			{name === 'chevron-down' && (
				<Feather name="chevron-down" size={RFValue(size)} color={color} />
			)}
			{name === 'comment' && (
				<MaterialCommunityIcons
					name="comment-outline"
					size={RFValue(size)}
					color={color}
				/>
			)}
			{name === 'food-menu' && (
				<MaterialIcons name="menu-book" size={RFValue(size)} color={color} />
			)}
			{name === 'gallery' && (
				<Ionicons name="camera" size={RFValue(size)} color={color} />
			)}
			{name === 'info' && (
				<Ionicons
					name="md-information-circle-outline"
					size={RFValue(size)}
					color={color}
				/>
			)}
			{name === 'like-fill' && (
				<AntDesign name="like1" size={RFValue(size)} color={color} />
			)}
			{name === 'like-outline' && (
				<AntDesign name="like2" size={RFValue(size)} color={color} />
			)}
			{name === 'location' && (
				<Ionicons name="location-sharp" size={RFValue(size)} color={color} />
			)}
			{name === 'menu' && (
				<Feather name="menu" size={RFValue(size)} color={color} />
			)}
			{name === 'settings' && (
				<Ionicons name="settings-sharp" size={RFValue(size)} color={color} />
			)}
		</>
	);
}

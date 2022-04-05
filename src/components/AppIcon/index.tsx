import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import {
	Feather,
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
	AntDesign,
} from '@expo/vector-icons';

export interface AppIconProps {
	name:
		| 'camera'
		| 'chevron-down'
		| 'chevron-left'
		| 'chevron-right'
		| 'comment'
		| 'food-menu'
		| 'gallery'
		| 'help'
		| 'info'
		| 'like-fill'
		| 'like-outline'
		| 'location'
		| 'menu'
		| 'plus'
		| 'power'
		| 'restaurant'
		| 'send'
		| 'settings'
		| 'star'
		| 'store'
		| 'user'
		| 'x';
	size?: number;
	color?: string;
}

export function AppIcon({ name, size = RFValue(30), color }: AppIconProps) {
	return (
		<>
			{name === 'camera' && (
				<Feather name="camera" size={RFValue(size)} color={color} />
			)}
			{name === 'chevron-down' && (
				<Feather name="chevron-down" size={RFValue(size)} color={color} />
			)}
			{name === 'chevron-left' && (
				<Feather name="chevron-left" size={RFValue(size)} color={color} />
			)}
			{name === 'chevron-right' && (
				<Feather name="chevron-right" size={RFValue(size)} color={color} />
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
			{name === 'help' && (
				<MaterialIcons name="help-outline" size={RFValue(size)} color={color} />
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
			{name === 'plus' && (
				<Feather name="plus" size={RFValue(size)} color={color} />
			)}
			{name === 'power' && (
				<Feather name="power" size={RFValue(size)} color={color} />
			)}
			{name === 'restaurant' && (
				<Ionicons name="restaurant" size={RFValue(size)} color={color} />
			)}
			{name === 'send' && (
				<Ionicons name="send-sharp" size={RFValue(size)} color={color} />
			)}
			{name === 'settings' && (
				<Ionicons name="settings-sharp" size={RFValue(size)} color={color} />
			)}
			{name === 'star' && (
				<Ionicons name="star" size={RFValue(size)} color={color} />
			)}
			{name === 'store' && (
				<MaterialIcons name="store" size={RFValue(size)} color={color} />
			)}
			{name === 'user' && (
				<Feather name="user" size={RFValue(size)} color={color} />
			)}
			{name === 'x' && <Feather name="x" size={RFValue(size)} color={color} />}
		</>
	);
}

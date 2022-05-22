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
		| 'random-food'
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

export function AppIcon({ name, size = 30, color }: AppIconProps) {
	switch (name) {
		case 'camera':
			return <Feather name="camera" size={RFValue(size)} color={color} />;
		case 'chevron-down':
			return <Feather name="chevron-down" size={RFValue(size)} color={color} />;
		case 'chevron-left':
			return <Feather name="chevron-left" size={RFValue(size)} color={color} />;
		case 'chevron-right':
			return (
				<Feather name="chevron-right" size={RFValue(size)} color={color} />
			);
		case 'comment':
			return (
				<MaterialCommunityIcons
					name="comment-outline"
					size={RFValue(size)}
					color={color}
				/>
			);
		case 'food-menu':
			return (
				<MaterialIcons name="menu-book" size={RFValue(size)} color={color} />
			);
		case 'gallery':
			return <Ionicons name="camera" size={RFValue(size)} color={color} />;
		case 'help':
			return (
				<MaterialIcons name="help-outline" size={RFValue(size)} color={color} />
			);
		case 'info':
			return (
				<Ionicons
					name="md-information-circle-outline"
					size={RFValue(size)}
					color={color}
				/>
			);
		case 'like-fill':
			return <AntDesign name="like1" size={RFValue(size)} color={color} />;
		case 'like-outline':
			return <AntDesign name="like2" size={RFValue(size)} color={color} />;
		case 'location':
			return (
				<Ionicons name="location-sharp" size={RFValue(size)} color={color} />
			);
		case 'menu':
			return <Feather name="menu" size={RFValue(size)} color={color} />;
		case 'plus':
			return <Feather name="plus" size={RFValue(size)} color={color} />;
		case 'power':
			return <Feather name="power" size={RFValue(size)} color={color} />;
		case 'random-food':
			return (
				<MaterialCommunityIcons
					name="food-fork-drink"
					size={RFValue(size)}
					color={color}
				/>
			);
		case 'restaurant':
			return <Ionicons name="restaurant" size={RFValue(size)} color={color} />;
		case 'send':
			return <Ionicons name="send-sharp" size={RFValue(size)} color={color} />;
		case 'settings':
			return (
				<Ionicons name="settings-sharp" size={RFValue(size)} color={color} />
			);
		case 'star':
			return <Ionicons name="star" size={RFValue(size)} color={color} />;
		case 'store':
			return <MaterialIcons name="store" size={RFValue(size)} color={color} />;
		case 'user':
			return <Feather name="user" size={RFValue(size)} color={color} />;
		case 'x':
			<Feather name="x" size={RFValue(size)} color={color} />;
		case undefined:
			return <></>;
	}
}

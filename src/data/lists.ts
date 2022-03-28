import { AppIconProps } from '../components/AppIcon';

interface SettingsItem {
	title: string;
	icon: AppIconProps['name'];
}

export const settingsItems: SettingsItem[] = [
	{
		title: 'Ajuda',
		icon: 'help',
	},
	{
		title: 'Sair',
		icon: 'power',
	},
];

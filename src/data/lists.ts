import { AppIconProps } from '../components/AppIcon';

interface SettingsItem {
	title: string;
	icon: AppIconProps['name'];
}

export const settingsItems: SettingsItem[] = [
	{
		title: 'Ajustes',
		icon: 'settings',
	},
	{
		title: 'Ajuda',
		icon: 'help',
	},
	{
		title: 'Sair',
		icon: 'power',
	},
];

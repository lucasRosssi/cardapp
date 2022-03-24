import React from 'react';

import { Header } from '../../../components/Header';
import { SettingsItem } from '../../../components/SettingsItem';
import { settingsItems } from '../../../data/lists';

import { Container, SettingsList } from './styles';

export function Settings() {
	const item_list = settingsItems.map(({ title, icon }) => (
		<SettingsItem key={title} title={title} icon={icon} />
	));

	return (
		<Container>
			<Header />

			<SettingsList>{item_list}</SettingsList>
		</Container>
	);
}

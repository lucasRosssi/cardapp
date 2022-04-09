import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { mocked } from 'ts-jest/utils';

import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from '../../contexts/AuthContext';
import theme from '../../styles/theme';
import { Header } from '../../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';

jest.mock('@react-navigation/native');

const Providers: React.FC = ({ children }) => (
	<AuthProvider>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</AuthProvider>
);

describe('Header Component', () => {
	it('should display user info when in Client Dashboard', () => {
		const routeMocked = mocked(useRoute as any);
		const navigationMocked = mocked(useNavigation as any);
		routeMocked.mockReturnValueOnce({
			name: 'ClientDashboard',
		});
		navigationMocked.mockReturnValueOnce({
			goBack: jest.fn(),
		});

		const { getByTestId } = render(<Header />, { wrapper: Providers });

		const userInfo = getByTestId('user-info');

		expect(userInfo).toBeTruthy();
	});

	it('should show back button when in stack screens', () => {
		const routeMocked = mocked(useRoute as any);
		const navigationMocked = mocked(useNavigation as any);
		routeMocked.mockReturnValueOnce({
			name: 'ClientDishesMenu',
		});
		navigationMocked.mockReturnValueOnce({
			goBack: jest.fn(),
		});

		const { getByTestId } = render(<Header />, { wrapper: Providers });

		const backButton = getByTestId('back-button');

		expect(backButton).toBeTruthy();
	});
});

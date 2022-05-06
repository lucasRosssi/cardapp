import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};

	padding: ${getStatusBarHeight() + 100}px 20px 20px;
`;

export const Logo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(35)}px;
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;

	margin-bottom: 50px;
`;

export const Form = styled.View`
	margin-bottom: 35px;
`;

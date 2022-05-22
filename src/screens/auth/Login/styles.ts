import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};

	padding: ${getStatusBarHeight() + 20}px 20px 20px;
`;

export const UserType = styled.View`
	width: 100%;

	flex-direction: row;
	justify-content: flex-end;

	margin-bottom: 60px;
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

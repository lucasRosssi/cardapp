import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	width: 100%;

	background-color: ${({ theme }) => theme.colors.primary};

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${getStatusBarHeight() + 20}px 30px 20px 20px;

	elevation: 10;
`;

export const Logo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(30)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const User = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Picture = styled.Image`
	width: ${RFValue(50)}px;
	height: ${RFValue(50)}px;

	border-radius: ${RFValue(25)}px;

	margin-right: 10px;
`;

export const Username = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

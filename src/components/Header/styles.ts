import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	width: 100%;
	height: ${RFValue(100)}px;

	background-color: ${({ theme }) => theme.colors.primary};

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${getStatusBarHeight() + 10}px 25px 10px 25px;

	elevation: 10;
`;

export const Logo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(25)}px;
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

export const Company = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const CompanyPicture = styled.Image`
	width: ${RFValue(50)}px;
	height: ${RFValue(50)}px;

	border-radius: ${RFValue(25)}px;

	margin-right: 10px;
`;

export const CompanyName = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const BackButton = styled(BorderlessButton)`
	align-items: center;
	justify-content: center;
`;

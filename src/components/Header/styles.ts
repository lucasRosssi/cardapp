import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	width: 100%;

	background-color: ${({ theme }) => theme.colors.primary};

	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	padding: ${getStatusBarHeight() + 20}px 20px 20px;
`;

export const Button = styled(BorderlessButton)``;

export const Logo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(25)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

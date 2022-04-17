import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.full_light};

	border-radius: 15px;
	border-top-left-radius: 0;

	padding: 12px;
	margin-bottom: 10px;
`;

export const User = styled.View`
	width: 100%;

	flex-direction: row;
	align-items: center;

	margin-bottom: 5px;
`;

export const Picture = styled.Image`
	width: ${RFValue(30)}px;
	height: ${RFValue(30)}px;
	border-radius: ${RFValue(15)}px;

	margin-right: 5px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.title};
`;

export const Content = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(11)}px;
	color: ${({ theme }) => theme.colors.text};
`;

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: ${RFValue(60)}px;

	background-color: ${({ theme }) => theme.colors.shape};

	justify-content: space-between;

	padding: 10px 10px 10px 10px;

	border-radius: 10px;
`;

export const Placeholder = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.title};
`;

export const TextInput = styled.TextInput`
	margin-top: -30px;
	padding-top: 30px;

	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const Error = styled.Text`
	position: absolute;
	bottom: ${RFValue(-18)}px;
	left: 10px;

	font-family: ${({ theme }) => theme.fonts.secondary};
	font-size: ${RFValue(13)}px;
	color: ${({ theme }) => theme.colors.attention};
`;

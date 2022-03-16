import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const Profile = styled.View`
	width: 100%;

	align-items: center;

	margin-top: 30px;
`;

export const Picture = styled.Pressable`
	width: ${RFValue(150)}px;
	height: ${RFValue(150)}px;

	margin-bottom: 10px;
`;

export const Image = styled.Image`
	width: ${RFValue(150)}px;
	height: ${RFValue(150)}px;
	border-radius: ${RFValue(75)}px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.title};
`;

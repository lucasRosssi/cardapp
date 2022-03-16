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
	width: ${RFValue(100)}px;
	height: ${RFValue(100)}px;

	margin-bottom: 10px;
`;

export const Image = styled.Image`
	width: ${RFValue(100)}px;
	height: ${RFValue(100)}px;
	border-radius: ${RFValue(50)}px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.title};
`;

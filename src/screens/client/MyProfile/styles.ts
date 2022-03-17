import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.background};

	padding: 0 20px;
`;

export const Profile = styled.View`
	width: 100%;

	align-items: center;

	margin: 30px 0;
`;

export const Picture = styled.Pressable`
	width: ${RFValue(150)}px;
	height: ${RFValue(150)}px;
`;

export const Image = styled.Image`
	width: ${RFValue(150)}px;
	height: ${RFValue(150)}px;
	border-radius: ${RFValue(75)}px;
`;

export const FormWrapper = styled.View`
	height: ${RFValue(150)}px;

	justify-content: space-between;

	margin-bottom: 40px;
`;

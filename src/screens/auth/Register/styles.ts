import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
})`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};

	padding: ${getStatusBarHeight()}px 20px 20px;
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

export const NoPicture = styled.View`
	width: ${RFValue(150)}px;
	height: ${RFValue(150)}px;
	border-radius: ${RFValue(75)}px;
	background-color: ${({ theme }) => theme.colors.shape};

	align-items: center;
	justify-content: center;
`;

export const Image = styled.Image`
	width: ${RFValue(150)}px;
	height: ${RFValue(150)}px;
	border-radius: ${RFValue(75)}px;
`;

export const CameraWrapper = styled.View`
	position: absolute;
	bottom: 0;
	right: 0;

	width: ${RFValue(35)}px;
	height: ${RFValue(35)}px;
	background-color: ${({ theme }) => theme.colors.primary};

	border-radius: ${RFValue(17.5)}px;

	align-items: center;
	justify-content: center;
`;

export const Form = styled.View`
	margin-bottom: 35px;
`;

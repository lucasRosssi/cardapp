import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const displayWidth = Dimensions.get('window').width - 50;

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5,
})`
	width: ${displayWidth}px;
	background-color: ${({ theme }) => theme.colors.full_light};

	flex-direction: row;

	border-radius: 20px;

	padding: 12px;
	margin-bottom: 20px;

	elevation: 10;
`;

export const Picture = styled.Image`
	width: ${RFValue(100)}px;
	height: ${RFValue(100)}px;

	border-radius: 10px;

	margin: -5px 12px -5px -5px;
`;

export const Content = styled.View`
	flex: 1

	margin-left: 12px;

`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.secondary};
`;

export const Price = styled.Text`
	position: absolute;
	bottom: 0;
	left: 0;

	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(15)}px;
	color: ${({ theme }) => theme.colors.secondary};

	line-height: ${RFValue(18)}px;
`;

export const Likes = styled.Text`
	position: absolute;
	bottom: 0;
	right: 5px;

	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(13)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

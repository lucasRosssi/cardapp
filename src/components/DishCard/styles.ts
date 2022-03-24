import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';

const displayWidth = Dimensions.get('window').width - 50;

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5,
})`
	width: ${displayWidth}px;
	background-color: ${({ theme }) => theme.colors.shape};

	border-radius: 20px;

	padding: 12px;
	margin: 0 25px;

	elevation: 10;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 10px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const Price = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(15)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
	margin-top: 15px;
`;

export const Picture = styled.Image`
	width: 100%;
	height: ${RFValue(220)}px;

	border-radius: 10px;
`;

export const Button = styled(BorderlessButton)`
	margin-right: 10px;
`;

export const Footer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 5px;
	margin-top: 7px;
`;

export const InteractionButtons = styled.View`
	flex-direction: row;
`;

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: ${RFValue(60)}px;
	background-color: ${({ theme }) => theme.colors.full_light};

	border-radius: 10px;

	flex-direction: row;

	overflow: visible;

	padding-left: 10px;
`;

export const Input = styled.TextInput`
	flex: 1;

	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.text};

	margin: 0 -10px;
	padding: 0 10px;
`;

export const Button = styled.TouchableOpacity.attrs({
	activeOpacity: 0.7,
})`
	width: ${RFValue(60)}px;
	height: ${RFValue(60)}px;
	background-color: ${({ theme }) => theme.colors.primary};

	align-items: center;
	justify-content: center;

	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const Error = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary};
	font-size: ${RFValue(13)}px;
	color: ${({ theme }) => theme.colors.attention};

	position: absolute;
	bottom: ${RFValue(-17) + 'px'};
	left: 0;
`;

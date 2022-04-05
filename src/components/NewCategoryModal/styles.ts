import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	position: absolute;
	bottom: 0;

	width: 100%;
	height: 25%;
	background-color: ${({ theme }) => theme.colors.background};

	align-items: center;
	justify-content: space-between;

	padding: 30px 20px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(25)}px;
	color: ${({ theme }) => theme.colors.title};
`;

export const CloseButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5,
})`
	position: absolute;
	top: ${RFValue(10)}px;
	right: ${RFValue(10)}px;
`;

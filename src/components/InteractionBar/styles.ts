import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	width: 100%;
	height: ${RFValue(60)}px;
	background-color: ${({ theme }) => theme.colors.full_light};

	justify-content: center;

	border-top-left-radius: ${RFValue(60)}px;
	border-top-right-radius: ${RFValue(60)}px;

	padding: 0 20px;
`;

export const InteractionButtons = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5,
})``;

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
	color?: string;
	textColor?: string;
}

export const Container = styled.TouchableOpacity<Props>`
	width: ${RFValue(150)}px;
	height: ${RFValue(30)}px;
	background-color: ${({ color }) => color};

	align-items: center;
	justify-content: center;
	border-radius: 10px;
`;

export const Title = styled.Text<Props>`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(14)}px;
	color: ${({ textColor }) => textColor};
`;

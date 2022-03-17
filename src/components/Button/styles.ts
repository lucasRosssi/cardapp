import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { RectButton } from 'react-native-gesture-handler';

interface Props {
	color?: string;
	textColor?: string;
}

export const Container = styled(RectButton)<Props>`
	width: 100%;
	height: ${RFValue(60)}px;
	background-color: ${({ color }) => color};

	align-items: center;
	justify-content: center;
	border-radius: 10px;
`;

export const Title = styled.Text<Props>`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(18)}px;
	color: ${({ textColor }) => textColor};
`;

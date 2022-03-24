import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background};

	flex-direction: row;

	padding: 10px 20px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.text};

	margin-left: 10px;
`;

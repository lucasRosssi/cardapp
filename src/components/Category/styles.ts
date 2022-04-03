import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.full_light};

	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 15px 10px;
	margin-bottom: 12px;

	border-radius: 10px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

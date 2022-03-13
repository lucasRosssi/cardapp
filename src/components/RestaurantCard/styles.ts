import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};

	border-radius: 20px;

	padding: 12px;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;

	margin-bottom: 3px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const LocationButton = styled(BorderlessButton)``;

export const Content = styled.View``;

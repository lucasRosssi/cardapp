import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};

	justify-content: space-between;
`;

export const DishHeader = styled.View`
	width: 100%;

	flex-direction: row;
	justify-content: space-between;

	padding: 20px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.title};
`;

export const Price = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.title};
`;

export const ImageSlider = styled.View`
	width: 100%;

	align-items: center;
`;

export const Picture = styled.Image`
	width: ${RFValue(300)}px;
	height: ${RFValue(200)}px;
	border-radius: 10px;
`;

export const Content = styled.View`
	width: 100%;

	padding: 20px;
`;

export const Details = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text};
	text-align: justify;
`;

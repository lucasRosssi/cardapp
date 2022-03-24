import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
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

export const Footer = styled.View`
	position: absolute;
	bottom: 0;

	width: 100%;
	height: ${RFValue(60)}px;
	background-color: ${({ theme }) => theme.colors.full_light};

	justify-content: center;

	border-top-left-radius: ${RFValue(60)}px;
	border-top-right-radius: ${RFValue(60)}px;

	padding: 0 20px;

	elevation: 10;
`;

export const InteractionButtons = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5,
})`
	margin-right: 20px;
`;

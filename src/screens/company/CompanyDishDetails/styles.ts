import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Input } from '../../../components/Input';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};

	justify-content: space-between;
`;

export const Content = styled.View`
	width: 100%;

	padding: 20px;
`;

export const DishHeader = styled.View`
	width: 100%;

	flex-direction: row;
	justify-content: space-between;

	margin-bottom: 30px;
`;

export const NameInput = styled(Input)`
	width: 66%;
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.title};
`;

export const PriceInput = styled(Input)`
	width: 30%;
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.title};
`;

export const ImageSlider = styled.View`
	width: 100%;

	align-items: center;

	margin-bottom: 30px;
`;

export const NoPicture = styled.View`
	background-color: ${({ theme }) => theme.colors.separator};

	width: ${RFValue(300)}px;
	height: ${RFValue(200)}px;
	border-radius: 10px;

	align-self: center;
	align-items: center;
	justify-content: center;
`;

export const Picture = styled.Image`
	width: ${RFValue(300)}px;
	height: ${RFValue(200)}px;
	border-radius: 10px;
`;

export const ChangePicture = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5,
})`
	position: absolute;
	bottom: -${RFValue(10)}px;
	right: -${RFValue(10)}px;

	width: ${RFValue(50)}px;
	height: ${RFValue(50)}px;
	background-color: ${({ theme }) => theme.colors.primary};

	border-radius: ${RFValue(25)}px;

	align-items: center;
	justify-content: center;
`;

export const DetailsInput = styled(Input)`
	height: 33%;

	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text};
	text-align: justify;

	margin-top: 30px;
	margin-bottom: 20px;
`;

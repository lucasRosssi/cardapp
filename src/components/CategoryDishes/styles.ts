import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const CategoryWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.shape};

	border-radius: 10px;

	margin: 0 30px;
	padding: 3px 10px;
`;

export const CategoryName = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.text};

	margin-left: 5px;
	margin-top: 5px;
`;

export const DishesList = styled.ScrollView.attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		paddingHorizontal: 40,
		paddingVertical: 20,
		marginBottom: 20,
	},
})``;

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	width: 100%;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs({
	width: '100%',
	paddingVertical: 20,
})``;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.title};

	padding: 0 20px;

	margin-bottom: 20px;
`;

export const Categories = styled.View``;

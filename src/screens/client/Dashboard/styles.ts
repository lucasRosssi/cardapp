import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs({
	contentContainerStyle: {
		width: '100%',
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
})``;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.title};

	margin-bottom: 15px;
`;

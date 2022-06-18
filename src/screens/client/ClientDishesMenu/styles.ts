import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MenuDTO } from '../../../dtos/EstablishmentDTO';

export const Container = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingVertical: 20,
	},
})``;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.title};

	padding: 0 20px;

	margin-bottom: 20px;
`;

export const CategoriesList = styled(
	FlatList as new (props: FlatListProps<MenuDTO>) => FlatList<MenuDTO>
)``;

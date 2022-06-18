import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, FlatListProps } from 'react-native';
import { EstablishmentDTO } from '../../../dtos/EstablishmentDTO';

export const Container = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.title};

	margin-bottom: 15px;
`;

export const EstablishmentsList = styled(
	FlatList as new (
		props: FlatListProps<EstablishmentDTO>
	) => FlatList<EstablishmentDTO>
).attrs({
	contentContainerStyle: {
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
})``;

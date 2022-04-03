import { FlatList, FlatListProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MenuDTO } from '../../../dtos/EstablishmentDTO';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.title};

	margin-bottom: 20px;
`;

export const CategoriesList = styled(
	FlatList as new (props: FlatListProps<MenuDTO>) => FlatList<MenuDTO>
).attrs({
	padding: 20,
})``;

export const AddCategoryButton = styled(RectButton)`
	position: absolute;
	bottom: 20px;
	align-self: center;

	width: ${RFValue(60)}px;
	height: ${RFValue(60)}px;
	background-color: ${({ theme }) => theme.colors.full_light};

	border-radius: ${RFValue(30)}px;

	align-items: center;
	justify-content: center;

	elevation: 6;
`;

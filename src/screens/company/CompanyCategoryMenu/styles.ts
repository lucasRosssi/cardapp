import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList, FlatListProps } from 'react-native';
import { DishDTO } from '../../../dtos/EstablishmentDTO';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};

	padding: 20px;
`;

export const TitleWrapper = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.full_light};

	border-radius: 10px;

	flex-direction: row;
	align-items: center;

	padding: 12px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.primary};

	margin-bottom: -5px;
	margin-left: 7px;
`;

export const DishesList = styled(
	FlatList as new (props: FlatListProps<DishDTO>) => FlatList<DishDTO>
).attrs({
	contentContainerStyle: {
		paddingVertical: 20,
		alignItems: 'center',
	},
})``;

export const AddItemButton = styled(RectButton)`
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

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	position: absolute;
	bottom: 0;

	width: 100%;
	height: 70%;
	background-color: ${({ theme }) => theme.colors.background};

	border-top-left-radius: ${RFValue(60)}px;
	border-top-right-radius: ${RFValue(60)}px;

	justify-content: space-between;
	align-items: center;

	padding-top: 10px;
`;

export const SwipeableIndicator = styled.View`
	position: absolute;
	top: ${RFValue(10)}px;
	align-self: center;

	height: ${RFValue(3)}px;
	width: ${RFValue(40)}px;
	background-color: ${({ theme }) => theme.colors.item_inactive};

	border-radius: 3px;
`;

export const CommentsWrapper = styled.View``;

export const CommentInput = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.full_light};

	flex-direction: row;

	padding: 15px 10px;

	border-top-width: 0.5px;
	border-color: ${({ theme }) => theme.colors.separator};

	elevation: 2;
`;

export const Input = styled.TextInput`
	flex: 1;

	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.text};

	padding: 15px 0;
	margin: -15px 0;
`;

export const SendButton = styled.TouchableOpacity`
	width: ${RFValue(45)}px;
	height: ${RFValue(45)}px;
	background-color: ${({ theme }) => theme.colors.primary};

	align-items: center;
	justify-content: center;

	padding-left: ${RFValue(5)}px;

	border-radius: ${RFValue(22.5)}px;
`;

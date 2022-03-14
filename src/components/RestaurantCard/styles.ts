import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.shape};

	border-radius: 20px;

	flex-direction: row;

	padding: 12px 0;
	margin-bottom: 25px;

	elevation: 10;
`;

export const LeftContent = styled.View`
	width: 80%;

	padding: 0 12px;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 10px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_bold};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
	margin-top: 15px;
`;

export const Picture = styled.Image`
	width: 100%;
	height: ${RFValue(150)}px;

	border-radius: 10px;
`;

export const RightContent = styled.View`
	width: 20%;

	align-items: center;

	padding: 0 12px;
`;

export const Button = styled(BorderlessButton)`
	margin-bottom: 12px;
`;

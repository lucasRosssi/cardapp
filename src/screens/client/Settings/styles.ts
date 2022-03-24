import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const SettingsList = styled.View`
	padding-top: 10px;
`;

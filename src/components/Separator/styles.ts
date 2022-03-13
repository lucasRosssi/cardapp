import styled from 'styled-components/native';

interface Props {
	color?: string;
}

export const Container = styled.View<Props>`
	width: 100%;
	border-top-width: 1px;
	border-top-color: ${({ color }) => color};
`;

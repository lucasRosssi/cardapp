import styled, { css } from 'styled-components/native';

interface Props {
	color?: string;
	vertical?: boolean;
}

export const Container = styled.View<Props>`
	${({ vertical, color }) =>
		vertical
			? css`
					height: 100%;
					border-left-width: 1px;
					border-left-color: ${color};
			  `
			: css`
					width: 100%;
					border-top-width: 1px;
					border-top-color: ${color};
			  `}
`;

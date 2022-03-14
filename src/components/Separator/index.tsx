import React from 'react';

import { Container } from './styles';

interface SeparatorProps {
	color?: string;
	vertical?: boolean;
}

export function Separator({ color, vertical = false }: SeparatorProps) {
	return <Container color={color ? color : '#000000'} vertical={vertical} />;
}

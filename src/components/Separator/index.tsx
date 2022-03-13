import React from 'react';

import { Container } from './styles';

interface SeparatorProps {
	color?: string;
}

export function Separator({ color }: SeparatorProps) {
	return <Container color={color ? color : '#000000'} />;
}

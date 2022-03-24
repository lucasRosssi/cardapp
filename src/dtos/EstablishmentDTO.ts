interface DishDTO {
	name: string;
	price: number;
	picture: string;
	details: string;
}

interface MenuDTO {
	category: string;
	dishes: DishDTO[];
}

interface EstablishmentDTO {
	id: string;
	name: string;
	picture: string;
	menu: MenuDTO[];
}

export { DishDTO, MenuDTO, EstablishmentDTO };

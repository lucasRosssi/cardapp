interface DishesDTO {
	id: string;
	name: string;
	picture: string;
	price: number;
}

interface MenuDTO {
	category: string;
	dishes: DishesDTO[];
}

interface EstablishmentDTO {
	id: string;
	name: string;
	picture: string;
	menu: MenuDTO[];
}

export { DishesDTO, MenuDTO, EstablishmentDTO };

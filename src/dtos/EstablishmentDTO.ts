interface DishDTO {
	name: string;
	price: number;
	picture: string;
	details: string;
	like_count: number;
}

interface MenuDTO {
	category: string;
	dishes: DishDTO[];
}

interface EstablishmentDTO {
	id?: string;
	name: string;
	address: string;
	picture: string;
	email: string;
	phone: string;
	menu: MenuDTO[];
}

export { DishDTO, MenuDTO, EstablishmentDTO };

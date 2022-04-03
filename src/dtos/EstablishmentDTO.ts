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
	address: string;
	picture: string;
	contact: {
		email: string;
		phone: string;
	};
	menu: MenuDTO[];
}

export { DishDTO, MenuDTO, EstablishmentDTO };

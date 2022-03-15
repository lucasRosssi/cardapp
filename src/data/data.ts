interface CategoryDishes {
	name: string;
	picture: string;
	price: number;
}

export const seafood_dishes: CategoryDishes[] = [
	{
		name: 'Camarão na Moranga',
		picture:
			'http://s2.glbimg.com/2bYPQwzADk77RnR-K81SZHBVMgg=/smart/e.glbimg.com/og/ed/f/original/2015/07/27/receita-moranga-camarao-edir-nascimento-01.jpg',
		price: 120,
	},
	{
		name: 'Risoto de Camarão e Abobrinha',
		picture:
			'https://www.vaisefood.com/wp-content/uploads/2013/04/Risotto-Gamberi-e-Zucchini.jpg',
		price: 80,
	},
	{
		name: 'Bisque de Lagosta',
		picture: 'https://idata.hiloved.com/imgs/52609fc3f8c82ff2-1024x681.jpg',
		price: 110,
	},
	{
		name: 'Acarajé',
		picture:
			'https://rodoviariaonline.com.br/wp-content/uploads/2018/10/voce-nao-pode-deixar-passar-festas-4-comidas-tipicas-de-salvador-5-640x427.jpg',
		price: 70,
	},
];

export const mexican_dishes: CategoryDishes[] = [
	{
		name: 'Tacos',
		picture:
			'https://img.itdg.com.br/tdg/images/recipes/000/073/984/347923/347923_original.jpg',
		price: 40,
	},
	{
		name: 'Burritos',
		picture:
			'https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2847-e7b65a5775641aa780fa2b34b5a624e4.jpg',
		price: 45,
	},
	{
		name: 'Nachos com Guacamole',
		picture:
			'https://www.selecoes.com.br/wp-content/uploads/2021/01/iStock-529669952-724x420.jpg',
		price: 42,
	},
];

export const cocktails: CategoryDishes[] = [
	{
		name: 'Caipirinha',
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzE3k3bdJGU8qf0E4Dz55CDRn3eGt-P1UorA&usqp=CAU',
		price: 15,
	},
	{
		name: 'Mojito',
		picture:
			'https://cadareceita.com.br/wp-content/uploads/2020/08/mojito-feepik-480x270.jpg',
		price: 20,
	},
];

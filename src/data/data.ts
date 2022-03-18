interface CategoryDishes {
	name: string;
	picture: string;
	price: number;
}

interface Establishments {
	name: string;
	picture: string;
}

export const establishments: Establishments[] = [
	{
		name: 'Restaurante Maravilha',
		picture:
			'https://revistamenu.com.br/wp-content/uploads/2021/12/vastosp.jpg',
	},
	{
		name: 'Luxury Bar',
		picture:
			'http://magazine.luxevile.com/wp-content/uploads/2016/01/2.-Bluumbar.png',
	},
	{
		name: 'The Cruise Bar',
		picture:
			'https://galeriemagazine.com/wp-content/uploads/2020/01/MAIN_BG_Goodman_Environmental_Hero_0007_RT-1920x1200.jpg',
	},
	{
		name: 'Sea Shore Restaurant',
		picture:
			'https://magazine.amaselections.com/wp-content/uploads/2020/05/main-lareserve.jpg',
	},
];

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
			'https://super.abril.com.br/wp-content/uploads/2017/12/caipirinha.png',
		price: 15,
	},
	{
		name: 'Mojito',
		picture:
			'https://cadareceita.com.br/wp-content/uploads/2020/08/mojito-feepik-480x270.jpg',
		price: 20,
	},
	{
		name: 'Manhattan',
		picture:
			'https://www.elhombre.com.br/wp-content/uploads/2017/03/10-things-Master-2-768x512.jpg',
		price: 30,
	},
	{
		name: 'Cosmopolitan',
		picture:
			'https://assets-prd.punchdrink.com/wp-content/uploads/2020/03/13102145/Article-Ultimate-Cosmo-Cosmopolitan-Cocktail-Recipe.jpg',
		price: 28,
	},
];

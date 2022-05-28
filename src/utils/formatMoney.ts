export function formatMoney(money: number) {
	const formattedMoney = money.toFixed(2).replace('.', ',');

	return formattedMoney;
}

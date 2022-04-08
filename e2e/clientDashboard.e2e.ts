import { expect } from 'detox';

describe('Client Dashboard Screen', () => {
	beforeAll(async () => {
		await device.launchApp();
	});

	it('should be able to select an establishment', async () => {
		const buttonEstablishment = element(by.id('button-establishment')).atIndex(
			0
		);

		await buttonEstablishment.tap();
		await expect(buttonEstablishment).not.toBeVisible();
	});

	it('should be able to select a dish', async () => {
		const cardDish = element(by.id('card-dish')).atIndex(0);
		const detailsDish = element(by.id('details-dish'));

		await cardDish.tap();

		await expect(detailsDish).toBeVisible();
	});

	it('should be able to like a dish', async () => {
		const buttonLike = element(by.id('button-like'));

		await buttonLike.tap();
	});

	it('should be able to comment', async () => {
		const buttonComment = element(by.id('button-comment'));
		const inputComment = element(by.id('input-comment'));
		const buttonSend = element(by.id('button-send'));

		await buttonComment.tap();

		await inputComment.tap();
		await inputComment.typeText('This was delicious!!');
		await buttonSend.tap();
	});
});

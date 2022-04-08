import { expect } from 'detox';

describe('Company Dashboard Screen', () => {
	beforeAll(async () => {
		await device.launchApp();
	});

	it('should open new category modal', async () => {
		const buttonAdd = element(by.id('button-add'));
		const modalAddCategory = element(by.id('modal-add-category'));

		await buttonAdd.tap();

		await expect(modalAddCategory).toBeVisible();
	});

	it('should add new category', async () => {
		const modalInput = element(by.id('modal-input'));
		const inputButton = element(by.id('input-button'));
		const category = element(by.id('category'));

		await modalInput.tap();
		await modalInput.typeText('Hello world!');
		await inputButton.tap();

		await expect(category).toExist();
	});
});

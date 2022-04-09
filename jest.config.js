module.exports = {
	preset: 'jest-expo',
	testPathIgnorePatterns: [
		'/node_modules',
		'/android',
		'/ios',
		'/.expo',
		'/scripts',
	],
	setupFilesAfterEnv: [
		'@testing-library/jest-native/extend-expect',
		'jest-styled-components',
		'./node_modules/react-native-gesture-handler/jestSetup.js',
	],
};

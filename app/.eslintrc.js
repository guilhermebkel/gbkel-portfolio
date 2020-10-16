module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
		jest: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 11,
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint", "flowtype", "jsx-a11y"],
	rules: {
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/no-floating-promises": "off",
		indent: ["error", "tab"],
		"@typescript-eslint/indent": ["error", "tab"],
		"no-tabs": "off",
		quotes: ["error", "double"],
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-extraneous-class": "off",
		"react/prop-types": "off",
		"@typescript-eslint/no-var-requires": "off"
	},
	settings: {
		"import/resolver": {
			typescript: {}
		},
		react: {
			version: "detect"
		}
	}
}

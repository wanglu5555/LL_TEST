module.exports = {
    env: {
        browser: false,
        es2021: true,
        mocha: true,
        node: true,
    },
    extends: ["standard", "plugin:prettier/recommended", "plugin:node/recommended"],
    parserOptions: {
        ecmaVersion: 12,
    },
    overrides: [
        {
            files: ["hardhat.config.js"],
            globals: {task: true},
        },
    ],
    rules: {
        "prettier/prettier": [
            2,
            {
                printWidth: 150,
                tabWidth: 4,
                singleQuote: false,
                bracketSpacing: false,
                htmlWhitespaceSensitivity: "ignore",
            },
        ],
    },
};

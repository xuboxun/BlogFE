module.exports = {
    "env": {
        "browser": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        'plugin:vue/essential'
    ],
    "parserOptions": {
        "parser": 'babel-eslint',
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": ["warn", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "comma-dangle": "off",
        "no-cond-assign": ["error", "always"],
        "no-unused-vars": ["warn"],
        "no-console": "off"
    }
};

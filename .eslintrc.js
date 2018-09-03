module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "parser": 'babel-eslint'
    },
    "extends": [
        "standard",
        "plugin:vue/essential"
    ],
    "plugins": [
        "vue"
    ],
    "rules": {
        // enable additional rules
        "indent": ["warn", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
    }
}
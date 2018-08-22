module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "rules": {
        "id-length": 0,
        "indent": [2, 2, { "SwitchCase": 1 }],
        "no-console": 1,
        "no-unused-vars": [1, { "vars": "local", "args": "none" }],
        "strict": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
};
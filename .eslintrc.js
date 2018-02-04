module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-use-before-define": 0,
        "react/prefer-stateless-function": 0,
        "react/jsx-filename-extension": 0,
        "react/prop-types": 0,
        "key-spacing": 0,
        "react/jsx-no-binds": 0
    },
    "parser": "babel-eslint"
};

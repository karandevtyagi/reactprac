const OFF = 0, WARN = 1, ERROR = 2;
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb"],
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react","react-hooks"
    ],
    "rules": {
        "react/jsx-filename-extension": [WARN, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": [OFF],
        "react/destructuring-assignment": [OFF],
        "global-require":0,
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "no-underscore-dangle": 'off',
        
    }
};
module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jquery": true,
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        
        // Global variables
        "methodsMain": "readonly",
        "methodsMenu": "readonly",
        "methodsAnimation": "readonly",
        "methodsResize": "readonly",
        "currency": "readonly",

        // Undeclared
        "convertToRoman": true,
        "convertToNum": true,
        "checkCashRegister": true,
        "valid": true,
        "ifNoHistory": true,
        "ifNoScore": true,
        "getQty": true,
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
};
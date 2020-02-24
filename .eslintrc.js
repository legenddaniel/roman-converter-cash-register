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
        "currency": "readonly",

        // Closures
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
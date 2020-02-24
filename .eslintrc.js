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
        "convertToRoman": "readonly",
        "convertToNum": "readonly",
        "checkCashRegister": "readonly",
        "valid": "readonly",
        "ifNoHistory": "readonly",
        "ifNoScore": "readonly",
        "getQty": "readonly",
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
};
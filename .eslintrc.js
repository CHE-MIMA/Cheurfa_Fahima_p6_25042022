module.exports = {
    "scripts":{
        "lint": "eslint ."
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
    }
}

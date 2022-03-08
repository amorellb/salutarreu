// Definimos una serie de constantes que podemos utilizar para definir el estado de las reglas de la configuración de ESLint.
const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  // Puesto que Next importa React por defecto, ignorar estas reglas nos sirve para evitar que aparezcan errores al no añadir las líneas "import React from 'react'" en los archivos JS.
  rules: {
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
  },
};

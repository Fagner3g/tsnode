# Configuration of the typescript and nodeJs project

- Create a backend folder
- Turn `yarn init -y`
- Now install the dependencies `yarn add -D typescript sucrase`
- Create `src/server.js` folder
- Now install `yarn add -D nodemon`
- Create the `nodemon.json` file

```
{
  "watch": ["src"],
  "ext": "ts",
  "execMap": {
    "ts": "sucrase-node src/server.ts"
  }
}
```

**_watch_** which folders will be monitored<br>
**_ext_** quais extensões serão monitoradas, se tivéssemos mais poderíamos colocá-las aqui<br>
**_execMap_** when file is updated, which script should I run?

- Configure **package.json**

```
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "sucrase ./src -d ./dist --transforms typescript,imports"
  }
```

# We've finished the settings, now let's go to lint part

- Add the following packages
  `yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
- Now `yarn eslint --init` answer the questionnaire
- In .eslintrc.js add some settings

```
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
```

- Now install dependencies of prettier
  `yarn add -D prittier eslint-config-prettier eslint-plugin-prettier`

- Change the vscode settings.json

```
"editor.formatOnSave": true,
  "[typescript]": { "editor.formatOnSave": false },
  "[typescriptreact]": { "editor.formatOnSave": false },
  "eslint.autoFixOnSave": true,
  "prettier.eslintIntegration": true,
  "eslint.validate": [
    { "language": "javascript", "autoFix": true },
    { "language": "javascriptreact", "autoFix": true },
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
```

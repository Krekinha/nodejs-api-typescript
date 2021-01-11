## Iniciando com typescript

* Inicie o novo projeto normalmente como em javascript:
```bash
yarn init -yPrimeiro 
```
* Primeiro instale o typescript no projeto local:
```bash
yarn add -D typescript
```
* Crie o arquivo de configuração do typescript:
```bash
yarn tsc --init
```
* Para trabspilar o código typescript em código javascript:
```bash
yarn tsc
```

# Automatizar o processo de transpilação

Para automatizar o processo de transpilação e executar/debugar nosso código typescript em tempo de desenvolvimento de formar mais fluída podemos a princípio colocar um script no package.json e utilizar o npm ou yarn para executar o projeto: 
```json
"scripts": { 
  "dev": "node index.js" 
 }
 ```
 Ou usar uma ferramenta como o ts-node-dev que compila seus projetos com Typescript e reinicia o projeto quando o arquivo é modificado:
 ```bash
 yarn add ts-node-dev -D
 ```
 E no package.json:
 ```json
 "script": {
   "dev:server": "ts-node-dev --respawn --transpile-only src/server.ts"
 }
 ```
 A flag **--transpile-only** indica que só **transpila** o código e não verifica se ele está certo ou errado. Nós não precisamos dessa verificação em tempo de desenvolvimento porque o VsCode, mesmo sem Eslint configurado, já faz isso para a gente.

A flag **--respawn** serve para que o **ts-node-dev** fique **observando** alterações do código, para transpilar e fazer auto reload da aplicação.

# Configurando o ESLint

* Primeiro precisamos baixar os pacotes ESLint:
```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
* Para começarmos a configurar o ESLint:
```bash
yarn eslint --init
```
* Nas opções do terminal escolha a última opção "To check syntax, find problems, and enforce code style"

* Na próxima tela escolha o tipo de módulos usado no seu projeto, ex: JavaScript modules (import/export)

* Depois diga se esta usando um framework como React ou Vue

* Se o seu projeto está usando Typescript

* Se o seu código esta rodando no Browser ou no Node (marque com espaço)

* Se você deseja utilizar uma guia de estilos popular

* Escolha uma das opções de guia de estilo disponível

* E por fim o formato do arquivo de configuração

* Dependendo das suas escolhas, você será informado da instalação de algumas dependências. Por padrão o **eslint** instala esses pacotes utilizando o **npm**, mas caso você esteja usando o **yarn**, e só aguardar a conclusão ao das instalações, deletar o arquivo **package.jason.lock** gerado pelo npm, e rodar o comando:
```bash 
yarn 
```
* Podemos fazer se algumas alterações no arquivo **.eslintrc.*** para que fique algo como:
 ```json
{
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:@typescrip-eslint/recomended",
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
 ```
* Tambem será necessário adicionar algumas linhas nas nossas configurações do vscode, para ficar algo como isso:
```json
    "eslint.probe": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "html",
        "markdown"
    ],
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
    ],
    "eslint.alwaysShowStatus": true,
    "eslint.codeActionsOnSave.mode": "all"
```
* Temos que instalar também um **resolver/import** para resolver conflitos de **import**:

```bash 
yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
```

* E vamos adicionar mais algumas linhas no nosso **.eslintrc.json**, no final irá ficar assim:
```json
{
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "@typescript-eslint"
    ],
    "rules": {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
     ],
     "linebreak-style":"off"
    },
    "settings": {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
          "typescript": {
            "alwaysTryTypes": true
          }
        }
      } 
}

```



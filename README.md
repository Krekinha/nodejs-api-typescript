## Iniciando com typescript

* Inicie o novo projeto normalmente como em javascript:
```bash
yarn init -y
```
* instale o typescript no projeto local:
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
* Primeiro instale o typescript no projeto local:
```bash
yarn add -D typescript
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
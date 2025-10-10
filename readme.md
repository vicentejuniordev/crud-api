### Crud- API

#### Uma boiler plate para você quer construir uma api de crud simples integrado com o banco de dados de um jeito rápido e básico.

### Arch

![arch-api](/docs/arch.png)
#### Arquitetura base para a produção do projeto, com as principais características da Api.

#### Como rodar o projeto?
##### Instalar depedências
```bash
npm i
```
##### Configurar variáveis ambiente no arquivo .env
```js
PORT=
```
##### Configuração do Banco
Apenas seguir o formato do arquivo .env.example
```bash
PORT=
DB_HOST= seu_host_aqui  
DB_USER=seu_usuario_aqui
DB_PASSWORD=sua_senha_aqui
DB_DATABASE=seu_banco_de_dados_aqui
DB_PORT=sua_porta_aqui
```
##### Iniciar o servidor
```bash
npm start
```

### Endpoints

Listar Usúarios
```bash
/user/list
```
Registrar Usúario
```bash
/user/register
```
Atualizar Usúario
```bash
/user/update
```
Deletar Usúario
```bash
user/delete
```

Uma api simples apenas que foi objeto de estudo de como conectar uma aplicação à um banco de dados.
<h1 align="center">C214 L1 - Tarefa API</h1>

<p align="center"> Repositório com o código da tarefa API </p>


- ## Pré-requisitos

 Para executar os projetos é necessário ter instalado [Node.js](https://nodejs.org/en/), [Git](https://git-scm.com) e [Postman](https://www.postman.com/downloads/).


- ### Baixando o projeto

```bash
# Clone este repositório
$ git clone https://github.com/silva-vagner/C214-Tarefa-Aula-6.git

```

- ### Instalando as dependências

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd movies-API

# Insira o comando para baixar e instalar as dependencias
$ npm install
```
## Executando o projeto
#### No terminal, inserir o comando:
```bash
$ npm start
```

#### A mensagem a seguir deverá aparecer no terminal:
```bash
> basic-api@1.0.0 start
> node server.js       

REST server running on port 4000...
```


## Importando a collection do postman
#### 1 - Baixar o seguinte arquivo do repositório:

MoviesCollection.postman_collection.json

#### 2 - Abrir o postman, clicar em import > file > Updload Files

#### 3 - Na janela aberta, selecionar o arquivo json baixado anteriormente

#### 4 - Clicar no botão import 

## Testando a aplicação

- #### Inserir um filme:
Selecionar a requisição POST, preencher o json em body de acordo com o filme que se deseja inserir, clicar em Send.

- #### Alterar um filme:
Selecionar a requisição PUT, preencher o json em body de acordo com o filme que se deseja atualizar, o nome é o identificador e não deve ser alterado, clicar em Send.

- #### Remover um filme:
Selecionar a requisição DELETE, preencher o body do json com o nome do filme que se deseja excluir, clicar em Send.

- #### Buscar todos os filmes:
Selecionar a requisição GET (Get all movies), clicar em send.

- #### Buscar um filme por nome:
Selecionar a requisição GET (Get movie by nome), preencher o body do json com o nome do filme que se deseja buscar, clicar em Send.



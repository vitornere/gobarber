<h1 align="center" style="margin-bottom: 20px;">
  <img alt="gobarber" src="./assets/gobarber_logo.png" width="auto" heigth="auto"/>
</h1>

<p align="center">
	<a href="#" rel="noopener noreferrer">
    <img alt="Build" src="https://github.com/vitornere/gobarber/workflows/Build/badge.svg?branch=master">
  </a>
	<a href="https://www.linkedin.com/in/vitor-nere/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Vitor%20Nere-blue">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
 <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
</p>

<img alt="Mockup" src="./assets/gobarber_background.png">

<p align="center" >
  <a href="#tecnologias-usadas"> Tecnologias Usadas</a> |
  <a href="#executando-o-projeto"> Executando o Projeto </a> |
  <a href="#deploy-da-aplicação"> Deploy da Aplicação</a> |
  <a href="#como-contribuir"> Como Contribuir?</a> |
</p>

## O projeto

Aplicação para agendar e gerenciar serviços de beleza, onde prestadores de serviços podem se cadastrar e usuários poderão marcar agendamentos com estes provedores.

### Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
...

## Executando o Projeto
### Clonando o projeto
```sh
$ git clone https://github.com/vitornere/gobarber.git
$ cd gobarber
```
#### Iniciando o Backend
```sh
$ cd backend

# Criando a imagem Docker do banco de dados:
# Dentro do projeto, já existe uma arquivo docker-compose.yml que possui o
# PostgreSQL como banco de dados, basta ter o Docker instalado em sua máquina.
# PGAdmin para acessar o banco de dados através da rota http://localhost:5433/
$ docker-compose up

# Rodando as migrations para o banco de dados e iniciando o projeto em outro terminal

$ yarn 
$ yarn typeorm migration:run 
$ yarn dev:server
```

#### Iniciando o Frontend
```sh
```
#### Iniciando o Mobile
```sh
```

## Deploy da Aplicação
```sh
...
```


## Como Contribuir?
**Faça um fork deste repositório**

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gobarber

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

### Licença

Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

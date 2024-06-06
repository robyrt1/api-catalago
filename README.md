# Sistema de Autenticação JWT e CRUD de Catálogo de Filmes

Este projeto consiste em um sistema de autenticação JWT (JSON Web Token) e uma API RESTful para manipulação de um catálogo de filmes. A autenticação é necessária para acessar as operações CRUD (Create, Read, Update, Delete) do catálogo de filmes.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação utilizada para desenvolver o projeto.
- **Nest.js**: Framework web para construir aplicativos Node.js escaláveis e eficientes.
- **TypeORM**: ORM (Object-Relational Mapping) para TypeScript e JavaScript, utilizado para interagir com o banco de dados PostgreSQL.
- **Swagger**: Ferramenta para documentação de APIs RESTful.
- **Docker**: Plataforma para desenvolver, enviar e executar aplicativos em contêineres.
- **Redis**: Banco de dados em memória utilizado como cache.
- **PostgreSQL**: Sistema gerenciador de banco de dados relacional utilizado para armazenar os dados do catálogo de filmes.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js
- Docker
- Docker Compose

## Instalação e Execução

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/robyrt1/api-catalago/tree/master
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie os contêineres Docker:

```bash
docker-compose -f development.docker-compose.yml up -d
```

4. Execute o servidor local:

```bash
npm run dev
```

5. Acesse a documentação da API Swagger em seu navegador:

```
http://localhost:PORT/api/v1/doc
```

## Rotas

### Autenticação de Usuário

- **POST /api/v1/jwt/user/auth**: Autentica um usuário e gera um token JWT para acessar as demais rotas.

### Catálogo de Filmes

- **POST /api/v1/movie**: Cria um novo filme no catálogo.
- **PUT /api/v1/movie/**: Atualiza as informações de um filme existente.
- **DELETE /api/v1/movie/**: Remove um filme do catálogo.

## Validação de Informações

As informações fornecidas nos endpoints serão validadas para garantir a integridade dos dados e a segurança da aplicação.

## Deploy

O projeto pode ser implantado em qualquer plataforma de nuvem que suporte aplicativos Node.js e bancos de dados PostgreSQL. Recomenda-se utilizar serviços como Amazon EC2, Heroku, Google AppEngine, entre outros.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Autor

## Autor

Me chamo Robert Mendes, sou desenvolvedor back-end. Iniciei meus estudos em back-end em 2021 e entrei no mercado de trabalho em 2022. Desde então, venho aprimorando minhas habilidades em desenvolvimento de APIs, utilizando tecnologias como Node.js, Nest.js, ORMs, Docker e arquitetura limpa (Clean Architecture). Estou sempre em busca de evoluir e aprender novas tecnologias para desenvolver soluções cada vez melhores.

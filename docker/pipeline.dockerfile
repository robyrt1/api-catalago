# Etapa de instalação
FROM node:20 as installer

ARG CONTEXT=.

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json da raiz do projeto
COPY ${CONTEXT}/package*.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia todos os outros arquivos do projeto
COPY ${CONTEXT} ./

# Etapa de produção
FROM node:20-alpine

ARG CONTEXT=.

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do diretório de instalação
COPY --from=installer /app ./

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]

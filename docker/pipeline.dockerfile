# Etapa de instalação
FROM node:20 as installer

ARG CONTEXT=.
WORKDIR /app
COPY ../package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

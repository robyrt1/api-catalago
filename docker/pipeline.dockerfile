# Etapa de instalação
FROM node:20 as installer

ARG CONTEXT=.
WORKDIR /app
COPY ../package*.json ./

RUN npm install

COPY . .

FROM node:20-alpine
ARG CONTEXT=.
WORKDIR /app
COPY --from=installer /app ./
CMD ["npm", "run", "dev"]

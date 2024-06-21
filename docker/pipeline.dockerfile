FROM node:20 as installer

ARG CONTEXT=.
WORKDIR /app

COPY ${CONTEXT}/package*.json ./

RUN npm install

COPY ${CONTEXT} .

FROM node:20-alpine
WORKDIR /app

COPY --from=installer /app ./

CMD ["npm", "run", "dev"]

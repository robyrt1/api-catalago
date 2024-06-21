FROM node:20 as installer

WORKDIR /api/app
COPY . .

RUN npm install

FROM node:20-alpine

WORKDIR /api/app
COPY --from=installer /api/app ./
CMD ["npm","run","dev"]
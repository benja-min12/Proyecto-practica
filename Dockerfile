FROM node:16 as builder

WORKDIR /app/proyecto
COPY . .
RUN npm install
RUN npm run build

FROM node:16

WORKDIR /app/proyecto

COPY --from=builder /app/proyecto/dist ./dist
COPY --from=builder /app/proyecto/package.json ./

RUN npm install --prod

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]




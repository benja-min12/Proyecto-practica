FROM node:16 as dev

WORKDIR /app/proyecto
COPY . .
RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN npm run build

EXPOSE 4200

CMD [ "ng", "serve", "--port", "4200" ]


 
FROM node:20.13.1-alpine3.19 as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:20.13.1-alpine3.19
RUN addgroup -S s3-security && adduser -S s3-securityuser -G s3-security
USER s3-securityuser
WORKDIR /usr/app
COPY --from=build /app/src/dist/s3-security/ ./
CMD node server/server.mjs
EXPOSE 4000

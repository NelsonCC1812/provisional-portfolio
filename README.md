# The base project

## Things to prepare

### server

* Change package.json name
* Create .env and variables (PORT=5000)

### client

* Create .env.production & .env.development and variables
    * PORT
    * DB
    * SESSION_SECRET
* Change title from public/html

## Deploy (from /)
````
rm -rf client/build; rm -rf server/public/*; cd client; npm run build-dev; cd ..; mv client/build/* server/public; rm -rf client/build
````
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
rm -rf client/build; rm -rf server/public/*; cd client; npm run build-prod; cd ..; mv client/build/* server/public; rm -rf client/build
````

```
git add . ; git commit -m "Deploy" ; git subtree --prefix=server push heroku master
```

```
heroku logs --tail
```


# Pasos a seguir

* El sistema de mensajeria lo llevaras por una base de datos en mongo Atlas
* Cuando quieran contactar contigo, rellenaran un formulario
* El formulario manda la informacion al back, este lo guarda en la base de datos que se encuentra en la nube.
* Despues tendras un script que te sondeara en la nube si tienes "correos" nuevos.
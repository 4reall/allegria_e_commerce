# Full-stack e-commerce website Allegria

# Server
## Start

First, install modules. 

```bash 
npm i
```

Now you should launch a local mongodb ([installation manual](https://www.mongodb.com/docs/manual/installation/)) 
or create a cloud cluster ([manual](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup)).
Then create a new database, copy its url, create the .env or .development.env file in the root of the server folder and paste url into it as ***DB_URL***.

Note that, app will fall with error if it could not find required variables 
***JWT_ACCESS_KEY***, ***JWT_REFRESH_KEY*** (minimal 8 characters), ***DB_URL***

Then start app

```bash 
npm start:dev
```

After successful connection, you can upload products to your database. 
The easiest way to do this - make a GET request on api/upload endpoint. It will read assets/products.json file and write it to database.

## Documentation

OpenAPI documentation available at api/doc url, after app has been started. Additionally, you can launch compodoc via run the command below

```
npm run compodoc
```

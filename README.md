# Full-stack e-commerce website Allegria

## Start


First of all you should connect to local mongodb ([installation manual](https://www.mongodb.com/docs/manual/installation/)) 
or create cloud cluster ([manual](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup)).
Then create a new database, copy its url, open server/app.module.ts and paste into MongooseModule.forRoot.

```typescript
MongooseModule.forRoot('<your database url>', {
  ignoreUndefined: true,
}),
```

After successful connection, you can upload products to your database. 
The easiest way to do this - make a GET request on api/upload endpoint. It will read assets/products.json file and write it to database.

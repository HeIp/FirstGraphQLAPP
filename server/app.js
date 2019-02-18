const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();


mongoose.connect('mongodb://admin:pass@gql-nina-shard-00-00-oa54s.mongodb.net:27017,gql-nina-shard-00-01-oa54s.mongodb.net:27017,gql-nina-shard-00-02-oa54s.mongodb.net:27017/gql-nina?ssl=true&replicaSet=gql-nina-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });
mongoose.connection.once('open', () =>{
    console.log('connected to the database');
})

app.use('/graphql', graphqlHTTP({
    schema,  //or just schema: schema
    graphiql: true
}));


app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
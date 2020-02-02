import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

console.log('Starting the server....');
app.listen(4000);

// npm run serve
// Now you can go to http://localhost:4000/graphql and the GUI is running there for you to use
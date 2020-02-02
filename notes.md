# GraphQL
The schema consists of four elements:
  1. Object Types
  2. Queries
  3. Input Object Types
  4. Mutations

### Object Types and Queries
> Object Types in GraphQL are similar to classes in Object Oriented JavaScript programming, and are used in queries when people are retrieving data with your API.
- The Object Type tells GraphQL what kind of objects your API can return, and what fields they have.
- Fields in a query are defined by Object Types, though the top fields can be different.
- Root fields are defined in queries (as in posts.js) -- choose these carefully since these are the values people will be using when they use your API.  Also, the description field will appear for users in GraphiQL, so write good messages.

### Input Object Types and Mutations
> Input Object Types check to make sure that all necessary fields are present and that they are of the correct type (GraphQL is strongly typed); they are used in mutations when people are sending data with your API.

### Graphiql
> Graphiql is a tool for testing GraphQL APIs instead of REST APIs (an IDE for GraphQl).
- Runs in your browser
- Syntax completion
- Intelligent autocomplete
- Real-time error highlighting, and error messaging
- Query completion

1. In order to use Graphiql, your API must be accessible via HTTP, meaning it needs to be running on a web server.  
   - Express is most commonly used in Node apps:  `npm i express`
   - Specific to Express apps:  `npm i express-graphql`
   - serve.js and "serve" script
2. Convenient keyboard shortcuts documented here:  https://github.com/graphql/graphiql/issues/670#issuecomment-558706969
3. Clicking on 'Docs' gives you access to your rootqueries and all the parts of your schema. 
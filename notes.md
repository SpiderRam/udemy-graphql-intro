# GraphQL

* The schema consists of four elements:
  1. Object Types
  2. Queries
  3. Input Object Types
  4. Mutations

### Object Types and Queries
> Object Types in GraphQL are similar to classes in Object Oriented JavaScript programming.
- The Object Type tells GraphQL what kind of objects your API can return, and what fields they have.
- Fields in a query are defined by Object Types, though the top fields can be different.
- Root fields are defined in queries (as in posts.js) -- choose these carefully since these are the values people will be using when they use your API.  Also, the description field will appear for users in GraphiQL, so write good messages.
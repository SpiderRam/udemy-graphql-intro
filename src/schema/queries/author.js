import { GraphQLString, GraphQLNonNull } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Author } from "../types/Author";

export default {
    author: {
        type: Author,
        description: 'Get a specific author',
        args: {
            id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (parent, { id }) => { // ES6 syntax, instead of passing args and then using args.id inside of getAuthor()
            return fakeDatabase.getAuthor(id);
        }
    }
}
import { GraphQLNonNull, GraphQLInt } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Post } from "../types/Post";

export default {
    post: {
        type: Post,
        description: 'Get details about a specific post',
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: (parent, { id }) => { // ES6 syntax, instead of passing args and then using args.id inside of getAuthor()
            return fakeDatabase.getBlogPost(id);
        }
    }
};
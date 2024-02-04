export const typeDefs = `#graphql
    type Game {
        id:ID!
        title: String!
        platform: [String!]!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Review{
        id: ID!
        rating: Int!
        content: String!
    }
    type Query{
        reviews: [Review!]!
        games: [Game!]!
        authors: [Author!]!
    }
`

// types can be ID, Int, Float, Boolean, String  and you can make it not nullable with '!'
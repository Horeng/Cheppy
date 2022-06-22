import { gql } from 'apollo-server-micro'

const typeDefs = gql`
    # Users
    type User {
        id: ID
        userid: String
        password: String
        email: String
        username: String
        cellnumber: String
        department: String
        usertype: Int
        semester: Int
    }
    input UserInput {
        userid: String
        password: String
        email: String
        username: String
    }
    type Query {
        getUsers: [User]
        getUserById(id: ID!): User
        getUserByUserId(userid: String!): User
        getIdByUserId(userid: String!): User
    }
    type Mutation {
        #Products
        newUser(input: UserInput): User
        updateUser(id: ID!, input: UserInput): User
        # deleteProduct(id: ID!): String
    }
`
export {typeDefs};
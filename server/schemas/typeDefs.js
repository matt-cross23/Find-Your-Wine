const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Wine {
    _id: ID
    wineName: String
    createdAt: String
    comments: [Comment]!
  }
  type User {
    name: String!
    username: String!
    password: String!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    thoughts: [Thought]!
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addWine(wineName: String!, vineyardLocation: String!): Wine
    addComment(commentId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;

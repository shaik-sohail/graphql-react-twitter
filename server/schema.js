const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    Tweets: [Tweet!]!
    Tweet(id: ID!): Tweet
    User(id: ID!): User
    Users: [User]
    Notifications: [Notification]
  }
  type Tweet {
    id: ID!
    body: String
    date: String
    Stats: Stat
  }
  type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    full_name: String
    name: String
    avatar_url: String
  }
  type Stat {
    id: ID!
    views: Int
    likes: Int
    retweets: Int
    responses: Int
  }
  type Notification {
    id: ID!
    body: String
  }
`;

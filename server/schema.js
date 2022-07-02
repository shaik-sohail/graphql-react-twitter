const { gql } = require("apollo-server");
const { date } = require("./resolvers/date");
exports.typeDefs = gql`
  type Query {
    Tweets: [Tweet!]!
    Tweet(id: ID!): Tweet
    User(id: ID!): User
    Users: [User]
    Notifications: [Notification]
  }
  scalar date
  type Tweet {
    id: ID!
    body: String
    date: String
    isRead: Boolean
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
  type Mutation {
    createTweet(body: String): Tweet
    deleteTweet(id: ID!): Tweet
    markTweetRead(id: ID!): Boolean
  }
`;

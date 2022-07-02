exports.Query = {
  Tweets: (parent, args, { db }) => {
    return db.tweets;
  },
  Users: (parent, args, { db }) => {
    return db.users;
  },
  Tweet: (parent, { id }, { db }) => {
    return db.tweets.find((tweet) => tweet.id === id);
  },
  User: (parent, { id }, { db }) => {
    return db.users.find((User) => User.id === id);
  },

  Notifications: (parent, args, { db }) => {
    return db.notifications;
  },
};

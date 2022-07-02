const { v4: uuid } = require("uuid");
const moment = require("moment");
exports.Mutation = {
  createTweet: (parent, { body }, { db }) => {
    const newTweet = {
      id: uuid(),
      body: body,
      date: moment().format("YYYY-MM-DD"),
      isRead: false,
    };
    db.tweets.push(newTweet);
    return newTweet;
  },
  deleteTweet: (parent, { id }, { db }) => {
    console.log(id);
    const tweet = db.tweets.find((tweet) => tweet.id === id);
    db.tweets = db.tweets.filter((tweet) => tweet.id !== id);
    return tweet;
  },
  markTweetRead: (parent, { id }, { db }) => {
    db.tweets = db.tweets.map((tweet) => {
      if (tweet.id === id)
        return {
          ...tweet,
          isRead: true,
        };
      else return tweet;
    });
    return true;
  },
};

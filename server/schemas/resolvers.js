const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User} = require('../models');

const resolvers = {
  Query: {
    // Old Code
    //  thoughts: async () => {
    //   return Thought.find().sort({ createdAt: -1 });
    // },

    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
    users: async () => {
      // Populates user profile with favorited cocktails
      return User.find().populate('Wine');
    },
  },

  Mutation: {
    // addThought: async (parent, { thoughtText, thoughtAuthor }) => {
    //   return Thought.create({ thoughtText, thoughtAuthor });
    // },
    // addComment: async (parent, { thoughtId, commentText }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     {
    //       $addToSet: { comments: { commentText } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeThought: async (parent, { thoughtId }) => {
    //   return Thought.findOneAndDelete({ _id: thoughtId });
    // },
    // removeComment: async (parent, { thoughtId, commentId }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };

  },
  // Example code for create query
  addThought: async (parent, { thoughtText }, context) => {
    if (context.user) {
      const thought = await Thought.create({
        thoughtText,
        thoughtAuthor: context.user.username,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},

};

module.exports = resolvers;

const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const wineSchema = new Schema({
  wineName: {
    type: String,
    required: 'You need to enter a Wine!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  vineyardLocation: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Wine = model('Wine', wineSchema);

module.exports = Wine;

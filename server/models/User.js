const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const bcrypt = require('bcrypt')
const userSchema = new Schema({ 
    name: {
    type: String,
    required: 'Please enter a name',
    minlength: 1,
    maxlength: 20,
    trim: true
    },

    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
    } ,
    date: {
        type: Date,
        default: Date.now
    }
});
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
module.exports = User;
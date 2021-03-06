const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answers: {
      type: [
          {
              text: String,
          }
      ],
      default: []
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
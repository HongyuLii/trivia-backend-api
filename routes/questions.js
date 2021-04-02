const router = require('express').Router();
let Question = require('../models/question');

router.route('/').get((req, res) => {
  Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const question = req.body.question;
    const answer = req.body.answer;

    const newQuestion = new Question({
      question,
      answer,
    });
  
    newQuestion.save()
    .then(() => res.json('Question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//   Question.findById(req.params.id)
//     .then(question => res.json(question))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/update/:id').post((req, res) => {
  Question.findById(req.params.id)
    .then(question => {
      new_answer = req.body.answers
      question.answers.append(new_answer)

      question.save()
        .then(() => res.json('Question updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
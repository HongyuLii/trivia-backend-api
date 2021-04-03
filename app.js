//Libraries
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 8000;

// App Instance
var app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connection to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/questiontester', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Backend Started');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });

const questionsRouter = require('./routes/questions');
const usersRouter = require('./routes/users');

app.use('/questions', questionsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
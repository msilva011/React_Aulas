const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rosamayara011:yOmvHET4yBSVwUby@pro-db.eeox5ni.mongodb.net/?retryWrites=true&w=majority')

const User = require('./models/usermodel');

async function insert(){
  await User.create({
    name: 'Teste1',
    email: 'teste@gmail.com'
  })
}
insert();

http.listen(3000,function(){
  console.log('Server is running')
});
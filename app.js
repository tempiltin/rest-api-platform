const TelegramApi = require("node-telegram-bot-api")
const TOKEN = "5526420433:AAGeBhYWFJtwHs7DCv2LqulPvAqKwShjH6I";
const bot = new TelegramApi(TOKEN,{polling:true});
const MSG =[
  {text:"Assalomu alaykum !"},
  {text:"Assalomu alaykum !"}
]
bot.on("message", async msg=> {
  const text = msg.text
  const chatId = msg.chat.id
  const firstName = msg.from.first_name
  const lastName = msg.from.first_name
  const userId = msg.from.id
  const userName = msg.from.username
  if(text === "/start"){
    await  bot.sendMessage(chatId , `${MSG[0].text}`)
    // await  
  
  }
})



const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const dotenv  = require("dotenv")
const app = express();
const connectDB = require("./db/db")
dotenv.config({path:"./.env"})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/users', apiRouter);
app.use("/rest" , require("./routes/CommunityOpinion"))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// boot


module.exports = app;

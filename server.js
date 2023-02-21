const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port =  process.env || 3000;
const session = require('express-session');
const path = require('path');
const router = require('./router');
require('dotenv').config()

app.use(session({
   secret:'uuidv4',
   resave:false,
   saveUninitialized : true
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, "public")));
app.use('/images', express.static(path.join(__dirname, "public/images")));
app.use('/', router);


app.set('view engine', "ejs");
app.get('/',(req,res) =>  {
   res.render('index', {title : "Atto Space"});
});

app.listen(port,() =>{
   console.log('Server is listening at ' + port);
});
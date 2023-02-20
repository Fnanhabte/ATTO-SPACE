const express  = require('express');
const router = express.Router();

const LoginInfo = {
   email : 'fnan@gmail.com',
   password : 'fnan1234'
};

router.post('/login', (req,res) => {
   if(req.body.email == LoginInfo.email && req.body.password == LoginInfo.password) {
      req.session.email = req.body.email
      res.render('index',{Success : 'THANK YOU FOR SIGINING IN'});
   }else {
      res.render('index', {Error: " PLEASE TRY AGAIN" })
   };
});

module.exports = router;
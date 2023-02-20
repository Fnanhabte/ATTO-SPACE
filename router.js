const express  = require('express');
const router = express.Router();

const LoginInfo = {
   email : 'fnan@gmail.com',
   password : 'fnan1234'
};

router.post('/login', (req,res) => {
   if(req.body.email == LoginInfo.email && req.body.password == LoginInfo.password) {
      req.session.email = req.body.email
      res.send('goog job for sigin in to your email')
   }else {
      res.send('unathorzied email and password');
   };
});

module.exports = router;
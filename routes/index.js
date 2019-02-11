const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = {name:'wes',age:100, cool:true};
  //res.send('Hey! It works!');
   //res.json(wes);
  //res.send(req.query.name); // localhost:7777/?name=wes
  res.json(req.query); 
  
});
router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
 /*  res.send('Hey! It works!');*/
  res.send(reverse); // localhost:7777/reverse/:name=wes
});




module.exports = router;

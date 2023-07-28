const express = require('express');
const app = express();
const path = require('path');
const bodyparser =require("body-parser");


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static("views"));
const usernamedb = "sandeep";
const passworddb = "123";

app.get("/",(req,res)=>{
     res.render('index')
})

app.post('/login',(req,res)=>{
  const {username,password} = req.body;
  if(username === usernamedb && password === passworddb){
    res.render('home');
  }else{
    res.render('index', { error: 'Incorrect username or password' });
  }
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
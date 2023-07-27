const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

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
    res.send("login successfull");
  }else{
    res.send("login failed ");
  }
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
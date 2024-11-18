const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
const bcrypt = require('bcryptjs');

const salt=bcrypt.genSaltSync(10);
const secret="asdfasdfasndfklasdfrdflsadsf";


app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());

app.use(cookieParser());

 mongoose.connect('mongodb+srv://aryanjangirofficial:aryanjangir@cluster0.cf2sx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
);

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
      if (err) throw err;
      res.json(info);
    });
  });


app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    try{
      const userDoc = await User.create({
        username,
        password:bcrypt.hashSync(password,salt),
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
  });
  
  app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });


  app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
  });
  



app.listen(4000);


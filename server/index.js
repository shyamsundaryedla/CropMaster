const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const model = require("./schema");
var bcrypt = require("bcryptjs");

const app = express();
const salt = bcrypt.genSaltSync(10);
app.use(express.json());
app.use(cors());

const url = "mongodb://localhost:27017/crop_master_db";
mongoose.connect(url);


app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;
  
    model
      .create({ username, email, password: bcrypt.hashSync(password, salt) })
      .then((users) => {
        res.json("user registered");
      })
      .catch((err) => res.json("error"));
  });

  app.post("/login", (req, res) => {
    const {email, password } = req.body;
      model.findOne({ email: email })
      .then((data)=>{
          if(data){
              const passOK = bcrypt.compareSync(password,data.password)
              if(passOK){
                  res.json('success')
              }
              else{
                  res.json('fail')
              }
          }
          else{
              res.json('not exist')
          }
      })
      .catch(err => {
          console.log('user not exist')
         res.json('not exist')
      })
          
  });
  
  


  app.listen(3001, (req, res) => {
    console.log("server running.....");
  });
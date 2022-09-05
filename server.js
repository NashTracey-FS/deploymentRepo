const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const axios = require("axios")
const users = require("./routes/api/users");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


const db = require("./config/keys").mongoURI;


mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  app.use(passport.initialize());

  require("./config/pasport")(passport);

  app.use("/api/users", users);
  

const port = process.env.PORT || 5600; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.get("/", (req, res, next) => {
  res.json({ message: "Server up!" });
  next();
});

app.get("/login", (req, res, next) => {
  res.json({ message: "Login" });
  var options = {
    method: 'PATCH',
    url: 'https://dev--3x-zmp9.us.auth0.com/api/v2/clients/CmZFU3mpcAiZI3ftGMWRuqdvLAFnzoQD',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer API2_ACCESS_TOKEN',
      'cache-control': 'no-cache'
    },
    data: {initiate_login_uri: '<https://deadrhosegames.herokuapp.com/login>'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  next()
});





const express = require("express");
const mongoose = require("mongoose");
const dt = require("./pages/login");
const app = express();
const User = require("./model/userSchema");
const user = require("./model/userSchema");
const port = 3001;
require("./db/conn");

app.use(express.json());

app.post("/resister", (req, res) => {
  const { email, password} = req.body;

  if (!email|| !password ) {
    return res.status(422).json({ error: "please fill all fileds" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "email already exist" });
      }
      const user = new User({ email, password,});
      if (password !== cpassword) {
        return res
          .status(422)
          .json({ err: " password and confirm password not matched" });
      }
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "user registered successfully" });
        })
        .catch((err) => res.status(500).json({ error: "failed to resister" }));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userlogdata = await user.findOne({ email: email });
    if (userlogdata.password === password) {
      res.status(200).json({ message: "user login successfully" });
    } else {
      res.status(400).json({ message: "password not match" });
    }
  } catch (err) {
    res.status(400).json({ err: "invalid user email" });
  }
});

app.get("/home", (req, res) => {
  res.send("welcome on home page");
});

app.get("/login", (req, res) => {
  res.send("welcome on login page");
});

app.listen(port, () => {
  console.log(`server running ${port}`);
});

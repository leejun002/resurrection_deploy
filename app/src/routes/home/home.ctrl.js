"use strict";

const User = require("../../models/User");

const users = {
  id: ["test", "test2", "test3"],
  psword: ["1234", "12345", "123456"],
};

const output = {
  home: (req,res) => {
    res.render("home/main");
  },
  
  login: (req,res) => {
    res.render("home/login");
  },
  
  register: (req,res) => {
    res.render("home/register");
  },
};

const process = {
  login: (req,res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = {
    output,
    process,
};
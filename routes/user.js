const express = require("express");
const db = require("../db");
const crypto = require("crypto-js");
const utils = require("../utils");

const router = express.Router();

//user register
router.post("/register", (request, response) => {
  const { firstname, lastname, DOB, address, pcode,phone,username,pword } = request.body;
  const encryptpass = crypto.MD5(pword);

  const statement = `insert into users(firstname,lastname,DOB,address,pcode,phone,username,pword)value('${firstname}','${lastname}','${DOB}','${address}','${pcode}','${phone}','${username}','${pword}')`;
  db.query(statement, (error, data) => {
    if (error) {
      //  console.log(error);
      response.send(utils.sendError(error));
    } else {
      //  console.log(data);
      response.send(utils.sendSuccess(data));
    }
  });
});

//user/login
router.post("/login", (request, resposne) => {
  const { username, pword } = request.body;
  //const encryptpass = crypto.MD5(pword);

  const statement = `select * from users where  username ='${username}'and pword ='${pword}'`;
  db.query(statement, (error, data) => {
    if (error) { console.log(data);
      console.log(error);
      //  console.log(users);
      resposne.send(utils.sendError(error));
    }
    if (data.length == 0) {
      console.log(data);
      resposne.send(utils.sendError(error));
    } else {
      resposne.send(utils.sendSuccess(data));
      console.log(data);
    }
  });
});

//user get using id
 /*router.get("/profile/:id", (request, response) => {
  const { id } = request.params;

  const statement = `select id,firstname,lastname,email,mobile
   from user where id = ${id}`;

  db.query(statement, (error, users) => {
    if (users.length > 0) {
      const user = users[0];
      response.send(utils.sendResult(error, user));
    } else {
      response.send(utils.sendError("user not available"));
    }
  });
}); */
/*
router.put("/profile/:id", (request, response) => {
  const { id } = request.params;
  const { firstName, lastName, mobile } = request.body;

  const statement = `update user set 
   firstname = '${firstName}',
   lastname ='${lastName}',
   mobile ='${mobile}' 
   where id = ${id}`;

  db.query(statement, (error, result) => {
    response.send(utils.sendResult(error, result));
  });
});

//delete user with id
router.delete("/profile/:id", (request, response) => {
  const { id } = request.params;

  const statement = `delete from user where id = ${id}`;

  db.query(statement, (error, result) => {
    response.send(utils.sendResult(error, result));
  });
}); */

module.exports = router;
import express from "express";
import pg from "pg";
import { Result } from "postcss";
import bodyParser from "body-parser";
import { scryptSync, randomBytes, Hash } from "crypto";
import crypto from "crypto";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import cors from "cors";
//var jwt = require('jsonwebtoken');




const app = express()
const salt = randomBytes(16).toString("hex")

app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())
// Postgres Pool.

const { Pool } = pg;


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:"postgres",
    database:"mexplorer"
})



function generateHash(data, algorithm = 'sha256', encoding = 'hex') {
  const hash = crypto.createHash(algorithm).update(data).digest(encoding);
  return hash;
}

/*
Ops on user.
1. createuser
2. updateuser
3. deleteuser
4. fetchuser


Ops on tests.
1. recordTest
2. fetchTestById
3. fetchTestByUID
4. fetchTestByTestId
5. fetchTestByScore
6. deleteTest

Ops on booksref
1. addBook
2. addRef
3. getALlBooks
4. getAllRefs


*/
app.get('/',(req,res)=>{

res.send(`<center><h1>This is backend utility of Mexplorer Web Application</h1></center>`)

});




// respond with "hello world" when a GET request is made to the homepage
app.post('/', (req, res) => {
const requestId = "1";

  res.send({
    "request-id":requestId,
    "app-name":"m-explorer-backend"
  })
})

app.post('/fetchAllUsers', async (req, res) => {
    
     // let responseObject  = {};
     const client = await pool.connect()
      let stmt = "SELECT * from users;";

      const result = await client.query({
          rowMode: 'array',
          text:stmt,
      })
      
    await client.end()
      res.send(result);

})


app.post('/fetchUserByUID', async (req, res) => {
    
  // let responseObject  = {};

  const user_uid = req.body.body.uid;

  const client = await pool.connect()
   let stmt = `SELECT * from users WHERE uid='${user_uid}';`;

   const result = await client.query({
       rowMode: 'array',
       text:stmt,
   })

//  await client.end()

   res.send({
    "requested_uid":user_uid,
    "result":result
   });

})

// Login  
app.post('/login', async (req, res) => {
    
  let responseObject  = {};

  const username = req.body.username;
  const password = generateHash(req.body.password);

  //const getHashFromUser = (username,password) => scryptSync(username+password, salt, 32).toString("hex");
  
  const client = await pool.connect()
   let stmt = `SELECT * from users WHERE username='${username}' and password='${password}' ;`;

   

   const result = await client.query({
       rowMode: 'array',
       text:stmt,
   })

   if(result.rowCount>0){



    // successful login
    responseObject["status"] = true;
    responseObject["result_set"]=result.rows[0]

    console.log(result.rows[0][4]);


    let token = jwt.sign({user:username} ,'gfjhfg',{'expiresIn':"2h"});
    const options = {
        expires:new Date(Date.now()+3*24*60*60*120),
        httpOnly:true
    }
    console.log(token);
    console.log(options);
    res.cookie("token",token,options);
   }else{
    //Bad Credentials
    responseObject["status"] = false;

   }
   //const getHashFromComputer = (result.rows[0][1],result.rows[0][3]) => scryptSync(username+password, salt, 32).toString("hex");

//  await client.end()

   res.send({
    "requested_uid":generateHash(username+password),
    "result":responseObject
   });

})

app.post('/register', async (req, res) => {
    
   let responseObject  = {};

  const username = req.body.username;
  const password = generateHash(req.body.password);
  const email = req.body.email;
  const currentDate = new Date();
  const created_at = currentDate.toISOString().slice(0, 19).replace('T', ' ');
  console.log(created_at);
  const uid = generateHash(username+password);
  
  const client = await pool.connect()
   let stmt = `INSERT INTO users(username,password,email,uid,created_at)values('${username}','${password}','${email}','${uid}','${created_at}');`;

   

   const result = await client.query({
       rowMode: 'array',
       text:stmt,
   })

   if(result["command"]=="INSERT"){
    responseObject["status"] = true;
    responseObject['responseText'] = "User Details inserted succesfully";
   }

   res.send(responseObject);

})


app.post('/checkIfLoggedIn', async(req,res)=>{

  let responseObject = {};
  console.log(req.cookies.MexplorerAccessor);
  if(req.cookies.MexplorerAccessor){

    responseObject["Found_Token"] = true;

    // checking in database
    const loginToken = req.cookies.MexplorerAccessor;
    const client = await pool.connect()
    let stmt = `SELECT * FROM users WHERE uid='${loginToken}'`;
 
    
 
    const result = await client.query({
        rowMode: 'array',
        text:stmt,
    })

    if(result.rowCount>0){
      // Found the logged in user.

       responseObject["Found_User"] = true;
       responseObject["User"] = result.rows[0][1];

    }else{
      responseObject["Found_User"] = false;
    }
  }else{
    responseObject["Found_Token"] = false;
  }


  res.send(responseObject);
})
app.post('/logout', async(req,res)=>{

  let responseObject = {};
  console.log(req.cookies.MexplorerAccessor);
  if(req.cookies.MexplorerAccessor)
  {
      res.cookie('MexplorerAccessor','',{
        maxAge:-10
      })
      responseObject["token_removed"] = "Yup!";
  }else{
    responseObject["token_removed"] = "Certainly Not Logged in";
  }
  res.send(responseObject);
})
console.log("Server Has started @ PORT : 3002\nServer Online");
app.listen(3002);
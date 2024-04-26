import axios from "axios";
import express from "express";
import pg from "pg";
import { Result } from "postcss";
import bodyParser from "body-parser";
import { scryptSync, randomBytes } from "crypto";




const app = express()
const salt = randomBytes(16).toString("hex")

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// Postgres Pool.

const { Pool } = pg;


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:"postgres",
    database:"mexplorer",
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})



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
    
  // let responseObject  = {};

  const username = req.body.body.username;
  const password = req.body.body.password;

  //const getHashFromUser = (username,password) => scryptSync(username+password, salt, 32).toString("hex");
  
  const client = await pool.connect()
   let stmt = `SELECT * from users WHERE username='${user_uid}' ;`;

   

   const result = await client.query({
       rowMode: 'array',
       text:stmt,
   })

   //const getHashFromComputer = (result.rows[0][1],result.rows[0][3]) => scryptSync(username+password, salt, 32).toString("hex");

//  await client.end()

   res.send({
    "requested_uid":user_uid,
    "result":result
   });

})

app.post('/register', async (req, res) => {
    
  // let responseObject  = {};

  const username = req.body.body.username;
  const password = req.body.body.password;
  const email = req.body.body.email;
  const created_at = Date();
  const deleted_at = "";

  const uid = "";
  
  const client = await pool.connect()
   let stmt = `INSERT INTO users(username,password,email,uid,created_at,deleted_at)values('${username}','${password}','${email}','${uid}','${created_at}','${deleted_at}');`;

   

   const result = await client.query({
       rowMode: 'array',
       text:stmt,
   })

   res.send(result);

})

console.log("Server Has started @ PORT : 3000\nServer Online");
app.listen(3000);
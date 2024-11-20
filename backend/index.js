const express = require('express');    //1
const RunServer = require('./Database/connection');
const signupRouter = require('./Router/userRoutes');
const cors = require('cors')
//const RunServer = require('./database/connection');

const app=express();//2
const port=5000;//3

//json: transmitting the data b/w client and server
app.use(express.json())//4
app.use (cors())

RunServer()
  //5

app.use('/api/user',signupRouter)
app.listen(port, ()=>{      //6
    console.log(`server is running on ${port} port!`)
})


























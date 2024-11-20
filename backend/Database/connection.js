//Deeksha@123
const mongoose = require('mongoose')

function RunServer(){
    try{
        mongoose.connect("mongodb+srv://deekshagowda546:Deeksha%40123@cluster0.xcazj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('MongoDB connected')
    }catch(error){
        console.log('Not Connected')
    }

    }

module.exports=RunServer;



//mongodb+srv://deekshagowda546:Deeksha@123@cluster0.xcazj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
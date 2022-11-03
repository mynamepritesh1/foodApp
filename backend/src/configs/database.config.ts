import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = ()=>{
    
    connect(process.env.MONGO_URI!,{
        useNewUrlParser: true,
        // userCreateIndex: true,
        useUnifiedTopology: true,
        


    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
        
        
    )

}

// const mongoose = require('mongoose');
// const MONGO_URI = "mongodb+srv://pritesh:2vKfXt0XZ89MCiqG@cluster0.etb3k5j.mongodb.net/food?retryWrites=true&w=majority"
// export const dbConnect = ()=>{
// .connect(MONGO_URI,{
//     userNewUrlParser: true,
//     useUnifiedTopology: true,



// }).then (() => console.log("successful connected"))
// .catch(err => console.log("not connectd"))


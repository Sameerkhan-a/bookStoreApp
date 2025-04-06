import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3002;
const MongoDBURI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(MongoDBURI,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
    console.log("Connected to mongodb")
} catch (error) {
    console.log("Error :",error)
}

// defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})

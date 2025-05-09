import {config} from 'dotenv'; config();
//gives us access to the Monog URI variable 
import mongoose from 'mongoose';
//using mongoose to establish the connection to MongoDB


mongoose.connect(process.env.ATLAS_URI);
//this code creates the connection to MongoDB

//ONCE the connection is open, then the message in the console will show
mongoose.connection.once('open', ()=>{
    console.log(`MongoDB connected: ${mongoose.connection.name}`);
});
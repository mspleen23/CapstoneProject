
import express from 'express';//importing the package
import {config} from 'dotenv'; config(); ////this allows the use of enviornmental variables coming from a .env file. 
import cors from 'cors';
import movieRouter from './Routes/movie-routes.mjs';
import './Database/database.mjs'

const app = express();
const PORT = process.env.PORT || 5050;


/////////Middleware
////////////////////////////////////////// 
app.use(express.urlencoded ({extended:true}));
app.use(express.json());
app.use(cors());
app.use('/movies', movieRouter);


////////Start the Express server//App.Listen
/////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });



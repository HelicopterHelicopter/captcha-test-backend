import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { config } from 'dotenv';
import apiRouter from './apis/index.js';
import morgan from 'morgan';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({origin:'*',credentials:true}));
app.use(express.json());
app.use(logger('dev'));

app.get("/",(req,res)=>{
    res.status(200).json({message:"working"});
});

app.use("/api",apiRouter);

app.listen(()=>{
    console.log(`Server is fire at port: ${port}`)
})
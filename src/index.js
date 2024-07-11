import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { config } from 'dotenv';
import apiRouter from './apis/index.js';
import session from 'express-session';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(session({
    secret:"abcdefg",
    saveUninitialized:false,
    resave:false
}))


app.use(cors({origin:['http://localhost:5174','https://captcha-test-3b172.firebaseapp.com','https://captcha-test-3b172.web.app','https://captcha.jheel.org'],credentials:true}));
app.use(express.json());
app.use(logger('dev'));


app.get("/",(req,res)=>{
    res.status(200).json({message:"working"});
});

app.use("/api",apiRouter);

app.listen(port,()=>{
    console.log(`Server is fire at port: ${port}`)
})
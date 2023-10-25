import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import { ORIGINS } from './config/index.js';

let app = express();

app.use(cors({
    origin: ORIGINS,
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send('hello world!');
})

export default app;
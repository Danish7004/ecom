import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
//for deploymemnt
import path from 'path';

//component import
import { router } from './routes/userRouter.js';
import { catRouter } from './routes/categoryRouter.js';
import { routerImg } from './routes/upload.js';
import { productRouter } from './routes/productRouter.js';
import { paymentRouter } from './routes/paymentRouter.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));

app.use('/user', router);
app.use('/api', catRouter);
app.use('/api', routerImg);
app.use('/api', productRouter);
app.use('/api', paymentRouter);


//Connect to Mongodb
const URI = process.env.MONGODB_URI

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('database connected')
})

// app.get('/', (req,res)=>{
//     res.json({msg: "hello world"})
// })


//for deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('server is running on port', PORT);
})
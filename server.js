import express from 'express';
import router from './routes/products.routes.js';
import dbConnection from './config/db.connection.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.set('view engine','ejs')
app.use(express.static('public'))
dbConnection();
app.use(express.urlencoded({extended:true}))
app.use(router);

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});
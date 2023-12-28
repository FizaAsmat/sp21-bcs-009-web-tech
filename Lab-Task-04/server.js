import express, { json } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/connectDB.js';
import authRoute from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

//configure
dotenv.config();

//database config
connectDB();

//rest object
const app = express ()

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// rest api
app.get('/',(req,res)=> {
  res.send("<h1>Welcome to ecommerce app</h1>")
})

//port
const PORT = process.env.PORT||8081;

//run listen
app.listen(PORT, ()=>{
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`)
})
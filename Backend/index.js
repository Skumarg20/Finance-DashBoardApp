import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import dotenv from "dotenv";
import helmet from 'helmet';
import kpiRoutes from "./routes/Kpi.js"
import productRoutes from "./routes/product.js"
import transactionRoutes from "./routes/transaction.js"
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

import morgan from 'morgan';

dotenv.config()
const app=express();
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
const PORT=process.env.PORT|| 9000;
mongoose.connect(process.env.MONGO_URl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("mongoose is connected")).then(async ()=>{

    app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`))
    
    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
}).catch((error)=>console.log(`${error} did not connect`));
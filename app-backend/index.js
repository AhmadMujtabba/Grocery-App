import express from "express";
import dotenv from "dotenv";
import { createListTable } from "./data/createListTable.js";
import basket from "./routes/basketRoutes.js";

dotenv.config();
const app=express();
const port = process.env.PORT;
app.use(express.json())
createListTable();

//Basket functions
app.use('/basket/items',basket)
//----------------

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
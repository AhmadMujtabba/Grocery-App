import express from "express"
import { getAllItemsFromBasket } from "../controllers/basketController.js"
const basket=express.Router()

basket.get('/',getAllItemsFromBasket)

export default basket
import express from "express"
import { getAllItemsFromBasket,addItemsToBasket } from "../controllers/basketController.js"
const basket=express.Router()

basket.get('/',getAllItemsFromBasket)
basket.post('/',addItemsToBasket)

export default basket
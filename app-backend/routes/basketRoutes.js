import express from "express"
import { getAllItemsFromBasket,addItemsToBasket,deleteItemsFromBasket } from "../controllers/basketController.js"
const basket=express.Router()

basket.get('/',getAllItemsFromBasket)
basket.post('/',addItemsToBasket)
basket.delete('/:id',deleteItemsFromBasket)

export default basket
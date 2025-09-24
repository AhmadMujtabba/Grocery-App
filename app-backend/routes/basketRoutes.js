import express from "express"
import { getAllItemsFromBasket,addItemsToBasket,deleteItemsFromBasket,editItemsQuantity } from "../controllers/basketController.js"
const basket=express.Router()

basket.get('/',getAllItemsFromBasket)
basket.post('/',addItemsToBasket)
basket.delete('/:id',deleteItemsFromBasket)
basket.patch('/:id',editItemsQuantity)

export default basket
import { getAllItemsFromBasketService,addItemsToBasketService } from "../services/basketServices.js";



export const getAllItemsFromBasket=async(req,res)=>{
    const items=await getAllItemsFromBasketService();
    handleresponse(res,200,"Data Fetched Successfully",items)
}

export const addItemsToBasket=async(req,res)=>{
    const items=await addItemsToBasketService(req.body);
    handleresponse(res,201,"Data Added Successfully",items)
}

const handleresponse=(res,status,message,data=null)=>{
    res.status(status).json({ status, message, data });
    }
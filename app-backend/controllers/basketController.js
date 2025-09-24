import { getAllItemsFromBasketService } from "../services/basketServices.js";

const handleresponse=(res,status,message,data=null)=>{
    res.status(status).json({ status, message, data });
    }

export const getAllItemsFromBasket=async(req,res)=>{
    const items=await getAllItemsFromBasketService();
    handleresponse(res,200,"Data Fetched Successfully",items)
}
import { getAllItemsFromBasketService,
    addItemsToBasketService,
    deleteItemsFromBasketService,
    editItemsQuantityService
 } from "../services/basketServices.js";



export const getAllItemsFromBasket=async(req,res)=>{
    const items=await getAllItemsFromBasketService();
    handleresponse(res,200,"Data Fetched Successfully",items)
}

export const addItemsToBasket=async(req,res)=>{
    const items=await addItemsToBasketService(req.body);
    handleresponse(res,201,"Data Added Successfully",items)
}

export const deleteItemsFromBasket=async(req,res)=>{
    const items=await deleteItemsFromBasketService(req.params.id);
    handleresponse(res,200,"Data Deleted !!!",items)
}

export const editItemsQuantity=async(req,res)=>{
    const items=await editItemsQuantityService(req.params.id,req.body.quantity);
    handleresponse(res,200,"Data Updated Successfuly", items)
}

const handleresponse=(res,status,message,data=null)=>{
    res.status(status).json({ status, message, data });
    }
import pool from "../config/db.js";

export const getAllItemsFromBasketService=async()=>{
    const connection= await pool.connect();
    const query="SELECT * FROM groceryapp"
    try{
        const result=await connection.query(query);
        return result.rows;
    }
    catch(error){
        console.log("Error fetching data")
        connection.release();
    }
    finally{
        connection.release();
    }
}

export const addItemsToBasketService=async(itemsData)=>{
    const connection= await pool.connect();
    const {item,quantity}=itemsData
    const query="INSERT INTO groceryapp (item,quantity) VALUES ($1,$2) RETURNING *"
    try{
        const result=await connection.query(query,[item,quantity]);
        console.log(result)
        return result.rows[0];
    }
    catch(error){
        console.log("Error inserting data")
        connection.release();
    }
    finally{
        connection.release();
    }
}


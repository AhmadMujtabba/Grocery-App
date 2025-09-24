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


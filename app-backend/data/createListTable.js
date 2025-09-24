import pool from "../config/db.js"

export const createListTable=async()=>{
    const query = `
    CREATE TABLE IF NOT EXISTS groceryApp (
      id SERIAL PRIMARY KEY,
      item VARCHAR(100) NOT NULL,
      quantity VARCHAR(100) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    const connection=await pool.connect();
    try{
        await connection.query(query)
    }
    catch(error){
        console.log("Error Creating DB",error)
        connection.release();
    }
    finally{
        connection.release();
    }
}

import pool from "../../database/config.js"

const list = async () =>{
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;        
}
export default list
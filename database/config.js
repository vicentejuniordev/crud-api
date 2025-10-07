import { Pool } from "pg";
import 'dotenv/config';

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

pool.on('connect', async ()=>{
    console.log('DB connected sucessful');
})

export default pool
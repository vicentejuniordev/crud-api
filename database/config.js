import { Pool } from "node-postgres";
import 'dotenv/config';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', async ()=>{
    console.log('DB connected sucessful');
})

export default pool
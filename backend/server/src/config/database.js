import pg from "pg";

const { Pool } = pg;
const pool = new Pool ({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } })

export const connectDB = async () => {
    try {
        const client = await pool.connect();
        console.log("PostgreSQL connected");
        client.release()
    } catch (error) {
        console.log("PostgreSQL connection failed: ", error.message)
        process.exit(1)
    }
}

export default pool
import pool from "../src/config/database.js";

const getEntires = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM entries ORDER BY name ASC");
        res.json(result.rows)
    } catch (error) {
        console.error("Error fetching entries: ", error.message)
        res.status(500).json({ message: "Server error" })
    }
}

export {getEntires}
import pool from "../src/config/database.js";

const getEntries = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM entries ORDER BY name ASC");
        res.json(result.rows)
    } catch (error) {
        console.error("Error fetching entries: ", error.message)
        res.status(500).json({ message: "Server error" })
    }
};

const getFilteredList = async (req, res) => {
    try {
        const category = req.params.category;
        const result = await pool.query("SELECT * FROM entries WHERE category ILIKE $1 ORDER BY name ASC", [`%${category}%`]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "No entries found" })
        };
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching filtered entries: ", error.message);
        res.status(500).json({ message: "Server error" })
    }
};

const getSearch = async (req, res) => {
    try {
        const search = req.params.search;
        const result = await pool.query("SELECT * FROM entries WHERE name ILIKE $1 OR description ILIKE $1 OR category ILIKE $1 OR entry_type ILIKE $1", [`%${search}%`]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "No entries found" })
        };
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching search: ", error.message);
        res.status(500).json({ message: "Server error" })
    }
}

export {getEntries, getFilteredList, getSearch}
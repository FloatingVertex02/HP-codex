import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/database.js";

const port = process.env.PORT ? Number(process.env.PORT) : 8000;

const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.log("ERROR", error)
            throw error
        })
        app.listen(port, () => { console.log(`Server is running on port: ${port}`)})
    } catch (error) {
        console.log("PostgreSQL connection failed", error.message)
    }
};

startServer()
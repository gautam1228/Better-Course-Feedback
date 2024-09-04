import dotenv from "dotenv";
import { connectDB } from "./db/prismaClient.js";
import { app } from "./app.js";

// Ensures that all the environment variables are available everywhere before the app runs.
dotenv.config({
    path : './env'
});

connectDB()
    .then(() => {

        app.on("error", (error) => {
            console.log("ERRR : ", error);
        });

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server Running on Port  : ${process.env.PORT}`);
        });

    })
    .catch((error) => {
        console.log("DB Connection Failed !!!! ", error);
    })
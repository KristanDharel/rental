import { config } from "dotenv";

config()
export const port = process.env.PORT;
export const dbURL = process.env.DB_URL;
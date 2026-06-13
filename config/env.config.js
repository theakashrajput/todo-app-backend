import { config } from "dotenv";
config();

const envData = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  CLIENT_URL: process.env.CLIENT_URL,
  NODE_ENV: process.env.NODE_ENV,
};

export default envData;

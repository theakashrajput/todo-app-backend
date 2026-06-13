import mongoose from "mongoose";

import envData from "../../config/env.config.js";

const connectToDB = async () => {
  const dbInstance = await mongoose.connect(`${envData.MONGODB_URI}`);
  console.log("Database connected successfully");
  console.log("Host:", dbInstance.connection.host);
  console.log("Name:", dbInstance.connection.name);
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from database");
});

mongoose.connection.on("reconnect", () => {
  console.log("Mongoose reconnected to database");
});

mongoose.connection.on("error", (err) => {
  console.log("Error in connecting to database:", err);
  process.exit(1);
});

export default connectToDB;

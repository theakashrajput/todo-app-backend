import envData from "./config/env.config.js";
import app from "./src/app.js";
import connectToDB from "./src/db/db.js";

const PORT = envData.PORT || 5000;

connectToDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    process.on("unhandledRejection", (err) => {
      console.log("Unhandled rejection error: ", err.message);
      server.close(() => {
        process.exit(1);
      });
    });
  })
  .catch((err) => {
    console.log("DB connection failed, server not started: ", err.message);
    process.exit(1);
  });

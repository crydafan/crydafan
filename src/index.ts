import express from "express";
import path from "path";
import { configDotenv } from "dotenv";

configDotenv({
  quiet: false,
  debug: true,
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

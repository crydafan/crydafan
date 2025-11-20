import express, { Request, Response } from "express";
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

app.get("/api/generate", (req: Request, res: Response) => {
  res.json({
    poem: "Roses are red,<br/>Violets are blue,<br/>This is a sample poem,<br/>Just for you.",
  });
});

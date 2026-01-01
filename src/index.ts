import express, { Request, Response } from "express";
import path from "path";
import { configDotenv } from "dotenv";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

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

app.get("/api/generate", async (_req: Request, res: Response) => {
  const { textStream } = streamText({
    model: openai("gpt-4o"),
    prompt: `Please generate a poem that contains short lyric fragments of Daft Punk's songs. Put the fragments between <b></b> and also add line breaks as <br/> and don't put quotation marks between the fragments. Return the response in plain text.`,
  });

  for await (const delta of textStream) {
    res.write(delta);
  }

  res.end();
});

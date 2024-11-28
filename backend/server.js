import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import booksJson from './books.json' with {type: 'json'};
import { parseCsvToJson } from "./middleware/parseCsvToJson.js";
import { mergeJsonFiles } from "./middleware/mergeJsonFiles.js";
import path from 'path';
import { fileURLToPath } from "url";

dotenv.config();

const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let mergedJson = [];

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get('/books/homepage', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

async function startServer() {
  try {
    const parsedBooksCsv = await parseCsvToJson("./books.csv");
  
    mergedJson = await mergeJsonFiles(parsedBooksCsv, booksJson)

    app.get('/data/books', (req,res) => {
        res.status(200).json(mergedJson);
    })
 
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log("Error starting the server", error);
  }
}

startServer();

import fs from "fs";
import csv from "csv-parser";

export const parseCsvToJson = async (filePath) => {
  const results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        results.forEach((item) => (item.id = Number(item.id)));
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

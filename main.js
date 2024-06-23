import fs from "fs";
import csv from "csv-parser";
import Collection from "./src/collection.js";
import Card from "./src/card.js";

const cardCollection = new Collection();

fs.createReadStream("collection.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (row) => {
    // const data = Card.normalizeCardData(row);
    // console.log(data);
    const card = Card.createCardEntry(row);
    cardCollection.addCard(card);
  })
  .on("end", () => {
    console.log(cardCollection.count());
  });

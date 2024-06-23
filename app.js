import fs from "fs";
import csv from "csv-parser";

let commonCount = 0;
let uncommonCount = 0;
let rareCount = 0;
let mythicCount = 0;

const uniqueCommons = new Set();
const uniqueUncommons = new Set();
const uniqueRares = new Set();
const uniqueMythics = new Set();

fs.createReadStream("collection.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (row) => {
    const rarity = row["Rarity"].toLowerCase();
    const count = parseInt(row["Count"], 10);
    const name = row["Name"];

    switch (rarity) {
      case "common":
        commonCount += count;
        uniqueCommons.add(name);
        break;
      case "uncommon":
        uncommonCount += count;
        uniqueUncommons.add(name);
        break;
      case "rare":
        rareCount += count;
        uniqueRares.add(name);
        break;
      case "mythic":
        mythicCount += count;
        uniqueMythics.add(name);
        break;
      default:
        break;
    }
  })
  .on("end", () => {
    const uniqueCommonCount = uniqueCommons.size;
    const uniqueUncommonCount = uniqueUncommons.size;
    const uniqueRareCount = uniqueRares.size;
    const uniqueMythicCount = uniqueMythics.size;

    console.log("Common count:", commonCount);
    console.log("Uncommon count:", uncommonCount);
    console.log("Rare count:", rareCount);
    console.log("Mythic count:", mythicCount);
    console.log("Unique commons:", uniqueCommonCount);
    console.log("Unique uncommons:", uniqueUncommonCount);
    console.log("Unique rares:", uniqueRareCount);
    console.log("Unique mythics:", uniqueMythicCount);
    console.log(
      "Unique cards:",
      uniqueMythicCount +
        uniqueCommonCount +
        uniqueUncommonCount +
        uniqueRareCount
    );
    console.log(
      "All cards:",
      mythicCount + commonCount + uncommonCount + rareCount
    );
  });

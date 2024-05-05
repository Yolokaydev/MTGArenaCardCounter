const fs = require("fs");
const csv = require("csv-parser");

// Define counters for each rarity and for unique entities
let commonCount = 0;
let uncommonCount = 0;
let rareCount = 0;
let mythicCount = 0;

// Define objects to keep track of unique entities for each rarity
let uniqueCommons = {};
let uniqueUncommons = {};
let uniqueRares = {};
let uniqueMythics = {};

// Read the CSV file and process each line
fs.createReadStream("collection.csv")
  .pipe(csv({ separator: ";" })) // Use the appropriate separator
  .on("data", (row) => {
    // Assuming the rarity column is named 'Rarity' and count column is named 'Count'
    const rarity = row["Rarity"].toLowerCase(); // Convert to lowercase for case-insensitivity
    const count = parseInt(row["Count"]); // Parse count to integer
    const name = row["Name"]; // Get the name of the entity

    // Increment the corresponding count
    switch (rarity) {
      case "common":
        commonCount += count;
        uniqueCommons[name] = true;
        break;
      case "uncommon":
        uncommonCount += count;
        uniqueUncommons[name] = true;
        break;
      case "rare":
        rareCount += count;
        uniqueRares[name] = true;
        break;
      case "mythic":
        mythicCount += count;
        uniqueMythics[name] = true;
        break;
      default:
        break;
    }
  })
  .on("end", () => {
    // Calculate the number of unique entities for each rarity
    const uniqueCommonCount = Object.keys(uniqueCommons).length;
    const uniqueUncommonCount = Object.keys(uniqueUncommons).length;
    const uniqueRareCount = Object.keys(uniqueRares).length;
    const uniqueMythicCount = Object.keys(uniqueMythics).length;

    // Print out the counts
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

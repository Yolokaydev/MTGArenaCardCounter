export default class Card {
  constructor(cardData) {
    this.count = cardData.count;
    this.name = cardData.name;
    this.edition = cardData.edition;
    this.collectorNumber = cardData.collector_number;
    this.rarity = cardData.rarity;
  }

  static normalizeCardData(cardData) {
    const normalizedData = {};
    for (let key in cardData) {
      const normalizedKey = key.replace(/\s+/g, "_").toLowerCase();
      normalizedData[normalizedKey] = cardData[key];
    }
    return normalizedData;
  }

  static createCardEntry(cardData) {
    const cardObj = this.normalizeCardData(cardData);
    return new Card(cardObj);
  }
}

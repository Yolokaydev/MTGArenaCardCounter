export default class Collection {
  constructor() {
    this.cards = [];
    this.collectionInfo = new collectionInfo();
  }

  addCard(card) {
    this.cards.push(card);
  }
  count() {
    return this.cards.length;
  }

  getCollectionInfo() {
    this.cards.forEach((cardEntry) => {});
  }
}

class collectionInfo {
  uniqueCardsCount;
  allCardsCount;

  constructor() {
    // console.log("collectionInfo created");
  }
}

import Card from "./card.js";

export default class Collection {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  count() {
    return this.cards.length;
  }

  getCollectionInfo() {
    this.cards.forEach((cardEntry) => {
      console.log(cardEntry);
    });
  }
}

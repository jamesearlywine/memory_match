import _ from "lodash";
import MatchCard from "./MatchCard.class";

export default class MatchCardDeck {
  cards = [];

  constructor(objProperties) {
    if (objProperties.cards) {
      this.addCards(objProperties.cards);
    }
  }

  clearCards() {
    this.cards = this.cards.splice(this.cards.length);
    return this;
  }

  addCards(cards) {
    this.cards = this.cards.concat(cards.map((card) => MatchCard.from(card)));
    return this;
  }

  shuffle() {
    this.cards = _.shuffle(this.cards);
    return this;
  }

  duplicate() {
    this.addCards(this.cards);
    return this;
  }

  static from(objProperties) {
    return new MatchCardDeck(objProperties);
  }
}

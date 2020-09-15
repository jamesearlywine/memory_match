import MatchCard from "../models/MatchCard.class";
import MatchCardDeck from "../models/MatchCardDeck.class";

const matchCardsAvailable = [
  new MatchCard({
    name: "Sally Sue",
    avatarImageFilename: "sally_sue.jpg",
  }),
  new MatchCard({
    name: "Jimmy Joe",
    avatarImageFilename: "jimmy_joe.jpg",
  }),
  new MatchCard({
    name: "Sandy Jo",
    avatarImageFilename: "sandy_jo.jpg",
  }),
  new MatchCard({
    name: "Willie Wanka",
    avatarImageFilename: "willy_wanka.jpg",
  }),
  new MatchCard({
    name: "Paulie",
    avatarImageFilename: "paulie.jpg",
  }),
  new MatchCard({
    name: "Velvet",
    avatarImageFilename: "velvet.jpg",
  }),
  new MatchCard({
    name: "Cristal",
    avatarImageFilename: "cristal.jpg",
  }),
  new MatchCard({
    name: "Tarzan",
    avatarImageFilename: "tarzan.jpg",
  }),
  new MatchCard({
    name: "Cristobal",
    avatarImageFilename: "cristobal.jpg",
  }),
];

const matchCardDeck = MatchCardDeck.from({
  cards: matchCardsAvailable,
})
  .duplicateCards()
  .shuffle();

const MatchCardsConfig = {
  matchCardsAvailable,
  matchCardDeck,
};

export default MatchCardsConfig;

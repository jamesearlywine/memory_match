import ENVIRONMENT from "../environment";

export default class MatchCard {
  name = "Unknown";
  avatarImageFilename = "unknown.jpg";

  constructor(objProperties) {
    Object.assign(this, objProperties);
    this.generateId();
  }

  getAvatarUrl() {
    return ENVIRONMENT.cardsAvatarBaseUrl + this.avatarImageFilename;
  }

  equals(otherMatchCard) {
    return (
      this.name === otherMatchCard.name &&
      this.avatarImageFilename === otherMatchCard.avatarImageFilename
    );
  }

  generateId() {
    this.id =
      window.performance.now() * 100000000000000 +
      Math.floor(Math.random() * 100000000000000);
  }

  static from(objProperties) {
    return new MatchCard(objProperties);
  }
}

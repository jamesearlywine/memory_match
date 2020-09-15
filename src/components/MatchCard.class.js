import ENVIRONMENT from "../environment";

export class MatchCard {
  static defaultValues = {
    name: "Unknown",
    avatarImageFilename: "unknown.jpg",
  };

  constructor(config) {
    Object.assign(this, MatchCard.defaultValues, config);
  }

  getAvatarUrl() {
    return ENVIRONMENT.baseCardsAvatarUrl + this.avatarImageFilename;
  }

  equals(otherMatchCard) {
    return (
      this.name === otherMatchCard.name &&
      this.avatarImageFilename === otherMatchCard.avatarImageFilename
    );
  }
}

export default MatchCard;

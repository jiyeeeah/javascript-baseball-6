import { pickNumberInRange } from "./MissionUtils";

const handleComputer = {
  getRandomNumbers: (min, max, length) => {
    const computerNumbers = [];

    while (computerNumbers.length < length) {
      const NUM = pickNumberInRange(min, max);
      if (!computerNumbers.includes(NUM)) computerNumbers.push(NUM);
    }
    return computerNumbers;
  },
};

export default handleComputer;

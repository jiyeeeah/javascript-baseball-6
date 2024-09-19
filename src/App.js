import { MissionUtils } from "@woowacourse/mission-utils";
import BaseballGame from "./BaseBallGame";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const baseballGame = new BaseballGame();
    await baseballGame.playGame();
  }
}

export default App;

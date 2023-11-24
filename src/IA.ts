import Player from "./Player";
import GameBoard from "./GameBoard";

export default class IA  extends Player {

  constructor(gameBoard: GameBoard) {
    super(gameBoard);
  }

  private getRandomInt(min: number, max: number) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin)) + newMin;
  }

  public play(value: string) {
    let playing: boolean;

    if (this.gameBoard.messageError == '') {
      playing = true;
    } else {
      playing = false;
    }

    while(playing) {
      let position = this.getRandomInt(0, 8);

      if (position < 3) {
        playing = this.gameBoard.setValueInBoard(value, 0, position);
      } else if (position < 6) {
        playing = this.gameBoard.setValueInBoard(value, 1, position - 3);
      } else {
        playing = this.gameBoard.setValueInBoard(value, 2, position - 6);
      }
    }
  }
}
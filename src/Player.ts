import GameBoard from "./GameBoard";

export default class Player {

  private _gameBoard: GameBoard;

  constructor(gameBoard: GameBoard) {
    this._gameBoard = gameBoard;
  }

  get gameBoard(): GameBoard {
    return this._gameBoard;
  }

  public play(value: string) {}
}
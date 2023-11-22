export default class GameBoard {
  private _board: string[][];

  constructor() {
    this._board= [
      ["_","_","_"],
      ["_","_","_"],
      ["_","_","_"],
    ];
  }

  get board(): Array<string>[]{
    return this._board;
  }

  public printBoard(): void {
    this._board.forEach((line) => {
      console.log(`${line[0]}|${line[1]}|${line[2]}`)
    });
  }
}
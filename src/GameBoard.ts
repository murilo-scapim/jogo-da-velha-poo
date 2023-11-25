export default class GameBoard {
  private _lineOne: string[];
  private _lineTwo: string[];
  private _lineThree: string[];
  private _board: Array<string>[] = [];
  private _messageError: string = '';

  constructor() {
    this._lineOne = ['_','_','_'];
    this._lineTwo = ['_','_','_'];
    this._lineThree = ['_','_','_'];
    this._board.push(this._lineOne);
    this._board.push(this._lineTwo);
    this._board.push(this._lineThree);
  }

  get board(): Array<string>[] {
    return this._board;
  }

  get messageError(): string {
    return this._messageError;
  }

  set messageError(message: string) {
    this._messageError = message;
  }

  public printBoard() {
    console.clear();
    
    this._board.forEach((line) => {
      console.log(`${line[0]}|${line[1]}|${line[2]}`);
    });

    console.log(this.messageError);
    this._messageError = '';
  }

  public setValueInBoard(value: string, y: number, x: number): boolean {
    if (this._board[y][x] == '_') {
      this._board[y][x] = value;
      return false;
    } else {
      return true;
    }
  }

  public printWinInBoard(player: string) {
    console.clear();

    this._board.forEach((line) => {
      console.log(`${line[0]}|${line[1]}|${line[2]}`);
    });

    console.log(`Parabens ${player} VENCEU!!!`);
    this._messageError = '';
  }

  public printDrawInBoard() {
    console.clear();

    this._board.forEach((line) => {
      console.log(`${line[0]}|${line[1]}|${line[2]}`);
    });

    console.log(`Deu velha!!!`);
    this._messageError = '';
  }
}
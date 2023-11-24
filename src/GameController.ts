import * as readline from 'readline'
import GameBoard from './GameBoard';
import IA from './IA';
import Person from './Person';

export default class GameController {

  private _gameBoard: GameBoard;
  private _inGame: boolean;
  private _person: Person;
  private _ia: IA;

  constructor() {
    this._gameBoard = new GameBoard();
    this._inGame = true;
    this._person = new Person(this._gameBoard);
    this._ia = new IA(this._gameBoard);
  }

  get gameBoard() {
    return this._gameBoard;
  }

  get inGame() {
    return this._inGame;
  }
  
  get person() {
    return this._person;
  }

  get ia() {
    return this._ia;
  }

  set inGame(status: boolean) {
    this._inGame = status;
  }

  public ask(query: string) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise(resolve => rl.question(query, ans => {
      rl.close();
      resolve(ans);
    }));
  };

  public checkWin(): boolean {
    let win = true;

    if(this.checkDraw()) {
      this.gameBoard.printDrawInBoard();
      win = false;
      return win;
    }

    this.gameBoard.board.forEach((line) => {
      if (line[0] == 'X' && line[1] == 'X' && line[2] == 'X') {
        this.gameBoard.printWinInBoard('Você');
        win = false;
      } else if (line[0] == 'O' && line[1] == 'O' && line[2] == 'O') {
        this.gameBoard.printWinInBoard('Computador');
        win = false;
      }
    });

    for (let i = 0; i < 3; i++) {
      if (this.gameBoard.board[0][i] == 'X' && this.gameBoard.board[1][i] == 'X' && this.gameBoard.board[2][i]== 'X') {
        this.gameBoard.printWinInBoard('Você');
        win = false;
      } else if (this.gameBoard.board[0][i] == 'O' && this.gameBoard.board[1][i] == 'O' && this.gameBoard.board[2][i]== 'O') {
        this.gameBoard.printWinInBoard('Computador');
        win = false;
      }
    }

    if (this.gameBoard.board[0][0] == 'X' && this.gameBoard.board[1][1] == 'X' && this.gameBoard.board[2][2]== 'X') {
      this.gameBoard.printWinInBoard('Você');
      win = false;
    } else if (this.gameBoard.board[0][0] == 'O' && this.gameBoard.board[1][1] == 'O' && this.gameBoard.board[2][2]== 'O') {
      this.gameBoard.printWinInBoard('Computador');
      win = false;
    }

    if (this.gameBoard.board[0][2] == 'X' && this.gameBoard.board[1][1] == 'X' && this.gameBoard.board[2][0]== 'X') {
      this.gameBoard.printWinInBoard('Você');
      win = false;
    } else if (this.gameBoard.board[0][2] == 'O' && this.gameBoard.board[1][1] == 'O' && this.gameBoard.board[2][0]== 'O') {
      this.gameBoard.printWinInBoard('Computador');
      win = false;
    }
    
    return win;
  }

  private checkDraw(): boolean {
    if(this.gameBoard.board[0].includes('_')) return false;
    if(this.gameBoard.board[1].includes('_')) return false;
    if(this.gameBoard.board[2].includes('_')) return false;

    return true;
  }
}
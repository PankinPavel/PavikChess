
class board {

    constructor() {
        this.squares = []
        this.init()
    }

    init(){
        // Инициализируем клетки на доске
        for (let row = 0; row < 8; row++) {
            this.squares.push([])
            for (let col = 0; col < 8; col++) {
                this.squares[row].push(null)
            }
        }
    }

    createChessboard() {
        let board = document.getElementById('chessboard');
        let isWhite = true;

        for (let row = 8; row != 0; row--) {
            for (let col = 0; col < 8; col++) {
                let square = document.createElement('div');
                square.classList.add('piece');
                square.classList.add('square-' + row + col);


                if ((row + col) % 2 === 0) {
                    square.classList.add('white');
                } else {
                    square.classList.add('black');
                }

                board.appendChild(square);
            }
        }
    }

    isCellEmpty(row, col) {
        // Проверяем, содержит ли клетка фигуру
        return !!this.squares[row][col];
    }
}


export const Board = new board()
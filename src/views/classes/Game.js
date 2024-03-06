import {Pawn} from "@/views/classes/figures/Pawn.js";
import {setFigurePlace} from "@/utils/utils.js";


class game {
    constructor() {
        this.pawnWhite1 = new Pawn([2, 0], 'w')
        this.pawnWhite2 = new Pawn([2, 1], 'w')
        this.pawnWhite3 = new Pawn([2, 2], 'w')
        this.pawnWhite4 = new Pawn([2, 3], 'w')
        this.pawnWhite5 = new Pawn([2, 4], 'w')
        this.pawnWhite6 = new Pawn([2, 5], 'w')
        this.pawnWhite7 = new Pawn([2, 6], 'w')
        this.pawnWhite8 = new Pawn([2, 7], 'w')
    }

    startGame() {
        const whiteFigures = [
            this.pawnWhite1,
            this.pawnWhite2,
            this.pawnWhite3,
            this.pawnWhite4,
            this.pawnWhite5,
            this.pawnWhite6,
            this.pawnWhite7,
            this.pawnWhite8,
        ]

        this.setDefaultFigures(whiteFigures)
    }

    setDefaultFigures(whiteFigures){

        whiteFigures.forEach(figure => {
            setFigurePlace(figure.coordinates, figure.setImage())
        })
    }
}


export const Game = new game()
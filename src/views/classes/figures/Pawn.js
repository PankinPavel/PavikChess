import pawnWhite from '@images/chessItems/pawn/white/pawn.svg'
import pawnBlack from '@images/chessItems/pawn/black/pawn.svg'
import { Board } from "@/views/classes/Board.js";


export class Pawn {
    constructor(coordinates, color, isFirstMove){
        this.coordinates = coordinates
        this.color = color
        this.isFirstMove = isFirstMove
    }

    setImage(){
        return this.color === 'w' ? pawnWhite : pawnBlack
    }

    getPossibleMoves(){
        const possibleMoves = []


        if(Board.isCellEmpty(this.coordinates[0] + 1, this.coordinates[1])){
            possibleMoves.push([this.coordinates[0] + 1, this.coordinates[1]])
        }

        if(!Board.isCellEmpty(this.coordinates[0] + 1, this.coordinates[1] + 1)){
            possibleMoves.push([this.coordinates[0] + 1, this.coordinates[1] + 1])
        }

        if(this.isFirstMove){
            if(Board.isCellEmpty(this.coordinates[0] + 2, this.coordinates[1])){
                possibleMoves.push([this.coordinates[0] + 2, this.coordinates[1]])
            }

            this.isFirstMove = false
        }

        return possibleMoves

    }
}
const Board = require('./board/board')

class Game{
    constructor(player1,player2,gameStatus){
        
        this.board = new Board()
        this.currentPlayer = null
        this.gameStatus = gameStatus

        //setting current player
        if(player1.isWhite){
            this.currentPlayer = player1
        }else{
            this.currentPlayer = player2
        } 
    }

    playerMove(player,startX,startY,endX,endY){

        //getting start box of player
        const start = this.board[startX][startY]
        
        //getting end box of player
        const end = this.board[endX][endY]

        //getting start piece of player
        const sourcePiece = start.getPiece

        if(sourcePiece.canMove()==true){
            if(end.getPiece == null){
                end.setPiece(sourcePiece)
            }else{
                end.setKilled()
                end.setPiece(sourcePiece)
            }

            if(currentPlayer == player1){
                currentPlayer == player2
            }else{
                currentPlayer == player1
            }

            console.log(player.name+"played played")

            return true
        }else{
            return false
        }
    }
}
module.exports = Game
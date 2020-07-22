const Piece = require('../piece')

class Knight extends Piece{
    constructor(white){
        super(white)
    }

    canMove(board, start, end) {
        //cannot kill own color army
        if (end.getPiece.isWhite === this.isWhite) {
            return false
        }

        x = Maths.abs(start.getX - end.getX)
        y = Maths.abs(start.getY - end.getY)

        //dhai ghr logic
        return x * y == 2
    }
}
module.exports = Knight
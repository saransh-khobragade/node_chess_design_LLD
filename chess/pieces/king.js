const Piece = require('../piece')

class King extends Piece {
    constructor(white) {
        super(white)
    }

    canMove(board, start, end) {
        //cannot kill own color army
        if (end.getPiece.isWhite === this.isWhite) {
            return false
        }

        x = Maths.abs(start.getX - end.getX)
        y = Maths.abs(start.getY - end.getY)

        //check its one move only or not
        if (x + y == 1 || x + y == 2) {
            return true
        }else{
            return false
        }
    }
}
module.exports = King
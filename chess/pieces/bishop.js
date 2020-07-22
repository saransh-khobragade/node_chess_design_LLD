const Piece = require('./piece/piece')

class Bishop extends Piece {
    constructor(white) {
        super(white)
    }

    //to check can it actually move or not
    canMove(board, start, end) {
        //cannot kill own color army
        if (end.getPiece.isWhite === this.isWhite) {
            return false
        }

        x = Maths.abs(start.getX - end.getX)
        y = Maths.abs(start.getY - end.getY)

        // 1,1 2,2 3,3 these can be path and path should be empty
        if(x==y && checkNoOneInPath(start,end)){
            return true
        }else{
            return false
        }
    }

    // recursive function to check complete path from start to end
    checkNoOneInPath(start,end){
        if(start.getX ==end.getX && start.getY==end.getY ){
            return true
        }else{
            if(board[start.getX+1][start.getY+1]==null){
                checkNoOneInPath(board[start.getX+1][start.getY+1],end)
            }else{
                return false
            } 
        }
    }
    
}
module.exports = Bishop
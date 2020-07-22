class Box{
    constructor(x,y,piece){
        this.x = x
        this.y=y
        this.piece = piece
    }
    //get piece info like kinhg,queen etc
    get getPiece(){
        return this.piece
    }

    //used when killed for example
    set setPiece(piece){
        this.piece = piece
    }
    //get x cordinate
    get getX(){
        return x
    }
    //get y cordinate
    get getY(){
        return y
    }
}
module.exports = Box
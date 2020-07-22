//abstract class
class Piece {
    isWhite = false
    isKilled = false

    constructor() {
        if (this.constructor === Piece) {
            throw new Error("abstract class cannot be instantiated")
        }
    }
    get isWhite() {
        return this.isWhite
    }
    set setKilled() {
        isKilled = true
    }

    //abstract method
    canMove() {
        throw new Error("abstract method cannot be instantiated")
    }
}
module.exports = Piece
class Player {
    constructor(white, name) {
        this.isWhite = white
        this.name = name
    }
    get isWhite() {
        return this.isWhite
    }
}
module.exports = Player
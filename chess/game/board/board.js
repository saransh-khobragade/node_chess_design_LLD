const Box = require('./box/box')
const King = require('../../pieces/king')
const Queen = require('../../pieces/queen')
const Rook = require('../../pieces/rook')
const Bishop = require('../../pieces/bishop')
const Knight = require('../../pieces/knight')
const Pawn = require('../../pieces/pawn')

class Board{

    constructor(){
        //64 boxes
        this.board = Array(8).fill(null).map(x => Array(8).fill(null))
    }

    intialiseBoard(){
        //intialiseBoard with preset all pieces 
        //this.board[0][0] = new Box(0,0,new Rook(true))
        //this.board[0][1] = new Box(0,1,new Knight(true))
        //this.board[0][2] = new Box(0,2,new Bishop(true))
    }
}
module.exports = Board
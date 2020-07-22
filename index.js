const Game = require('./chess/game/game')
const Game = require('./chess/game/game')
const Player = require('./chess/player/player')

//intialize players
const player1 = new Player(true,"saransh")
const player2 = new Player(false,"ajit")

//intialize game
const game = new Game(player1,player2,true)

//player1 played
game.playerMove(player1,0,0,4,4)

//player2 played
game.playerMove(player2,4,5,2,1)

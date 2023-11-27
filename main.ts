function EmemyMovement (X: number, Y: number, Enemy: game.LedSprite) {
	
}
function Sync_A_Sync (Enemy: game.LedSprite, X: number, Y: number) {
	
}
input.onButtonPressed(Button.A, function () {
    sprite.move(1)
    radio.sendValue("Move", 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
    radio.sendValue("Turn", 90)
})
input.onGesture(Gesture.Shake, function () {
    PlayerAB = randint(0, 1)
    radio.sendValue("init", PlayerAB)
    if (PlayerAB == 0) {
        sprite = game.createSprite(0, 4)
    } else {
        sprite = game.createSprite(4, 0)
    }
})
radio.onReceivedValue(function (name, value) {
    let Enemy: game.LedSprite = null
    if (name == "init") {
        if (value == 0) {
            SelfStartX = 0
        } else {
            SelfStartX = 4
        }
    }
    if (name == "Move") {
        Enemy.move(1)
    }
    if (name == "Turn") {
        Enemy.turn(Direction.Right, 90)
    }
})
let SelfStartX = 0
let PlayerAB = 0
let sprite: game.LedSprite = null
radio.setGroup(69)

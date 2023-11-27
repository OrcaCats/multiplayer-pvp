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
    if (InitA == 0) {
        PlayerAB = randint(0, 1)
        radio.sendValue("init", PlayerAB)
        if (PlayerAB == 0) {
            sprite = game.createSprite(0, 4)
            Self = [0, 1]
        } else {
            sprite = game.createSprite(4, 0)
        }
        InitA = 1
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "init") {
        if (value == 0) {
            SelfStartX = 0
        } else {
            SelfStartX = 4
        }
    }
})
let SelfStartX = 0
let Self: number[] = []
let PlayerAB = 0
let sprite: game.LedSprite = null
let InitA = 0
radio.setGroup(69)
InitA = 0

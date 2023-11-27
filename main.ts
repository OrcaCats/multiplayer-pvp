input.onButtonPressed(Button.A, function () {
    sprite.move(1)
    radio.sendValue("Move", 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
    radio.sendValue("Turn", 90)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("init", 0)
})
radio.onReceivedValue(function (name, value) {
    if (name == "init") {
        Enemy = game.createSprite(4, 2)
    }
    if (name == "Move") {
        Enemy.move(1)
    }
    if (name == "Turn") {
        Enemy.turn(Direction.Right, 90)
    }
})
let Enemy: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 2)
radio.setGroup(69)

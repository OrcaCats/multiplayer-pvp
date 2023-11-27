def on_button_pressed_a():
    sprite.move(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    sprite.turn(Direction.RIGHT, 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    if True:
        pass
radio.on_received_value(on_received_value)

sprite: game.LedSprite = None
sprite = game.create_sprite(2, 2)

def on_forever():
    radio.set_group(69)
basic.forever(on_forever)

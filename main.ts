let sprite1 = game.createSprite(0, randint(0, 4))
let sprite2 = game.createSprite(Math.constrain(0, 1, 4), randint(0, 5))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        sprite1.move(1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        sprite1.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.A)) {
        sprite1.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        sprite1.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (sprite1.isTouching(sprite2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Happy)
        game.gameOver()
    }
})

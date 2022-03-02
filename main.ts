input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.compassHeading())
})
basic.forever(function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart)
})

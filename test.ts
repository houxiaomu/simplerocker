// Add your code here
basic.showIcon(IconNames.Yes)
SimpleRocker.setup(AnalogPin.P0, AnalogPin.P1, TouchPin.P2)

SimpleRocker.onRightPressed(function () {
    basic.showArrow(ArrowNames.East)
})
SimpleRocker.onButtonPressed(function () {
    basic.showIcon(IconNames.Heart)
})
SimpleRocker.onUpPressed(function () {
    basic.showArrow(ArrowNames.North)
})
SimpleRocker.onLeftPressed(function () {
    basic.showArrow(ArrowNames.West)
})
SimpleRocker.onDownPressed(function () {
    basic.showArrow(ArrowNames.South)
})



// Add your code here
rocker.onRightPressed(function () {
    basic.showArrow(ArrowNames.East)
})
rocker.onButtonPressed(function () {
    basic.showIcon(IconNames.Heart)
})
rocker.onUpPressed(function () {
    basic.showArrow(ArrowNames.North)
})
rocker.onLeftPressed(function () {
    basic.showArrow(ArrowNames.West)
})
rocker.onDownPressed(function () {
    basic.showArrow(ArrowNames.South)
})

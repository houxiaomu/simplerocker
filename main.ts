namespace rocker {
    let px = AnalogPin.P0
    let py = AnalogPin.P1
    let ps = TouchPin.P2

    // % block
    // % vrx.defl=AnalogPin.P0
    // % vry.defl=AnalogPin.P1
    // % sw.defl=TouchPin.P2
    export function setup(vrx: AnalogPin, vry: AnalogPin, sw: TouchPin) {
        px = vrx
        py = vry
        ps = sw
    }

    //% block
    export function onButtonPressed(a: () => void) {
        input.onPinPressed(ps, a)
    }


    //% block
    export function onLeftPressed(a: () => void) {
        control.runInParallel(() => {
            while (true) {
                if (pins.analogReadPin(px) < 300) {
                    a();
                }
                pause(20);
            }
        });
    }

    //% block
    export function onRightPressed(a: () => void) {
        control.runInParallel(() => {
            while (true) {
                if (pins.analogReadPin(px) > 700) {
                    a();
                }
                pause(20);
            }
        });
    }

    //% block
    export function onUpPressed(a: () => void) {
        control.runInParallel(() => {
            while (true) {
                if (pins.analogReadPin(py) < 300) {
                    a();
                }
                pause(20);
            }
        });
    }

    //% block
    export function onDownPressed(a: () => void) {
        control.runInParallel(() => {
            while (true) {
                if (pins.analogReadPin(py) > 700) {
                    a();
                }
                pause(20);
            }
        });
    }

}
function playMusic () {
    basic.showIcon(IconNames.EigthNote)
    randomMusic = randint(1, 5)
    if (randomMusic == 1) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    } else if (randomMusic == 2) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    } else if (randomMusic == 3) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    } else if (randomMusic == 4) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    } else if (randomMusic == 5) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    } else {
    	
    }
    basic.showIcon(IconNames.Heart)
}
function randomNo () {
    soundExpression.soaring.play()
    for (let index = 0; index <= 7; index++) {
        basic.showNumber(randint(0, 9))
    }
    pick = randint(0, 9)
    soundExpression.twinkle.play()
    for (let index = 0; index <= 4; index++) {
        basic.clearScreen()
        basic.pause(200)
        basic.showNumber(pick)
        basic.pause(200)
    }
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    arcRainbowOn = !(arcRainbowOn)
    if (arcRainbowOn) {
        haloDisplay.showRainbow(1, 360)
        haloDisplay.show()
        arcRainbowOn = true
    } else {
        haloDisplay.clear()
        haloDisplay.show()
    }
})
function arcRainbow () {
    if (arcRainbowOn) {
        basic.pause(5)
        haloDisplay.rotate(1)
        haloDisplay.show()
    } else {
    	
    }
}
input.onButtonPressed(Button.AB, function () {
    brightness = 15
    haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.White))
    haloDisplay.show()
    for (let index = 0; index < 4; index++) {
        brightness = brightness * 2
        basic.pause(1000)
        haloDisplay.setBrightness(brightness)
        haloDisplay.show()
    }
    basic.pause(1000)
    haloDisplay.clear()
    haloDisplay.show()
    haloDisplay.setBrightness(20)
})
input.onButtonPressed(Button.B, function () {
    playMusic()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    randomNo()
})
let brightness = 0
let pick = 0
let randomMusic = 0
let arcRainbowOn = false
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(20)
haloDisplay.clear()
arcRainbowOn = false
soundExpression.slide.playUntilDone()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    arcRainbow()
})

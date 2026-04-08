input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . # . #
        . # . # .
        `)
    for (let index = 0; index < 5; index++) {
        music.setVolume(160)
        music.rest(music.tempo())
        music.rest(music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Breve))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    }
})
basic.forever(function () {
	
})

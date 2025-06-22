setcpm(20/4)
// Key in: F
// Other Chords (Essentials Summary):
// Chord	Essential Notes	Optional
// m13	1 – ♭3 – 5 - ♭7 – 13
// +7(♯9) 1 – 3 – 5 – ♭7 – ♯9  C, E, G, Bb, and D#
// m9	1 – ♭3 – 5 - ♭7 – 9
// 7♭9	1 – 3 – ♭7 – ♭9
// maj7	1 – 3 – 5 – 7
// m6/9	1 – ♭3 – 6 – 9

let minor13 = n("0, 2b, 4, 6b, 12")
let aug7sharp9 = n("0, 2, 4, 6b, 8#")
let minor9 = n("0, 2b, 4, 6b, 8")
let dominant7flat9 = n("0, 2, 6b, 8b")

let melody = note("e5@2 d5 c5@2 a#4 a4@2 g4 f4 d5@2 e3@2 [d3 c#4 d4 f4 a4] e5@2 a4 g4@2")

// Play multiple patterns at the same time, 
// make sure to write $: before each (this is similar to stack()):

$: "[a b c e d b]".pickRestart({
    a: minor13.scale("G:major"),
    b: aug7sharp9.scale("A:major"),
    c: chord("D-9").voicing(),
    d: chord("BbM7").voicing(),
    e: chord("C-9").voicing(),
}).s("piano")


$: melody.sound("piano")

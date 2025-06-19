/*
Strudel can play more than one sound at a time by adding a comma inside brackets.
*/

// Example1: 2:3 polyrhythms
setcps(.5)

sound("[bd bd, cp cp cp] [cp cp, bd sd bd]")
    ._punchcard({ labels: 1 })

// Example2:
// 3:4 polyrhythms
sound("[bd!4, cp!3]")
    ._punchcard({ labels: 1 })
setcps(.75)

let chords = chord("<Cm7 Fm7>/4")

stack(
  s("bd").struct("<[x*<1 2> [~@3 x]] x>"), 
   // CHORDS
  chords.voicing().s("gm_epiano1:1"),
  
)
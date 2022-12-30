radio.setGroup(1)

input.onButtonPressed(Button.A,function(){
    radio.sendNumber(950)
})

input.onButtonPressed(Button.B,function(){
    radio.sendNumber(960)
})

input.onButtonPressed(Button.AB,function(){
    radio.sendNumber(0)
})
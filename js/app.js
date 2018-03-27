//Varible definitions
var keys = document.querySelectorAll(`.key`);
var notes = {
    ckey: document.querySelector(`#cAudio`),
    dkey: document.querySelector(`#dAudio`),
    ekey: document.querySelector(`#eAudio`),
    fkey: document.querySelector(`#fAudio`),
    gkey: document.querySelector(`#gAudio`),
    akey: document.querySelector(`#aAudio`),
    bkey: document.querySelector(`#bAudio`)
}




//Function Definitions
function playNote(letter) {
    notes[letter].currentTime = 0
    notes[letter].play()
}





//Calling functiions / Add Event Listeners
keys.forEach(function (key) {
    key.addEventListener(`mousedown`, function () {
        playNote(key.id)
    })
})

document.addEventListener(`keydown`, function (event) {
    //console.log(event)
    if (event.key == `a`) {
        playNote("ckey")
    }
    if (event.key == `s`) {
        playNote("dkey")
    }
    if (event.key == `d`) {
        playNote("ekey")
    }
    if (event.key == `f`) {
        playNote("fkey")
    }
    if (event.key == `g`) {
        playNote("gkey")
    }
    if (event.key == `h`) {
        playNote("akey")
    }
    if (event.key == `j`) {
        playNote("bkey")
    }
})
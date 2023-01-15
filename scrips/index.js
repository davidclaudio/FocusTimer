import {
    buttonPlay,
    buttonStop,
    buttonMoreTime,
    buttonLessTime,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffe,
    buttonSoundFire,

} from "./elements.js"

import controlEvents from "./controlsEvents.js"

const controls = controlEvents()


buttonPlay.addEventListener('click', controls.playPressed)
buttonStop.addEventListener('click', controls.stopPressed)
buttonMoreTime.addEventListener('click', controls.moreTimePressed)
buttonLessTime.addEventListener('click', controls.lessTimePressed)

buttonSoundForest.addEventListener('click', controls.soundForestPressed)
buttonSoundRain.addEventListener('click', controls.soundRainPressed)
buttonSoundCoffe.addEventListener('click', controls.soundCoffePressed)
buttonSoundFire.addEventListener('click', controls.soundFirePressed)


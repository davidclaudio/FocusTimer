import { buttonSoundPressed, resetButtonsSounds} from "./elements.js"
import { updateMoreTimer, updateLessTimer, playTimer, stopTimer, controleVariableButtonPlayPressed} from "./timer.js"

import Sounds from "./sounds.js"

const sounds = new Sounds()


export default function controlsEvents (){

    function playPressed(){
        if(controleVariableButtonPlayPressed == false)
            playTimer(sounds, resetButtonsSounds)
    }

    function stopPressed(){
        stopTimer(sounds, resetButtonsSounds)
    }

    function moreTimePressed(){
        updateMoreTimer()
    }

    function lessTimePressed(){
        updateLessTimer()
    }

    function soundForestPressed(){        
        buttonSoundPressed('forest')
        sounds.audioExecute('forest')
    }

    function soundRainPressed(){
        buttonSoundPressed('rain')
        sounds.audioExecute('rain')
    }

    function soundCoffePressed(){
        buttonSoundPressed('coffe')
        sounds.audioExecute('coffe')
    }

    function soundFirePressed(){
        buttonSoundPressed('fire')
        sounds.audioExecute('fire')
    }

    return{
        playPressed,
        stopPressed,
        moreTimePressed,
        lessTimePressed,
        soundForestPressed,
        soundRainPressed,
        soundCoffePressed,
        soundFirePressed

    }
}
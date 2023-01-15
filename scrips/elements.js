const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMoreTime = document.querySelector('.moreTime')
const buttonLessTime = document.querySelector('.lessTime')

const buttonSoundForest = document.querySelector('.forest')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffe = document.querySelector('.coffe')
const buttonSoundFire = document.querySelector('.fire')

const spanMinutes = document.querySelector('.minutes')
const spanSeconds = document.querySelector('.seconds')

let buttonSoundPressedControl = null //Guarda o nome do botão pressionado. Null é quando nenhum está ativo. 

function buttonSoundPressed(nameButtonPressed){
  resetButtonsSounds()

  switch (nameButtonPressed){
    case buttonSoundPressedControl:
      buttonSoundPressedControl = null
      break
    case 'forest':
      buttonSoundPressedControl = nameButtonPressed
      buttonSoundForest.classList.add('pressed')
      break
    case 'rain':
      buttonSoundPressedControl = nameButtonPressed
      buttonSoundRain.classList.add('pressed')
      break
    case 'coffe':
      buttonSoundPressedControl = nameButtonPressed
      buttonSoundCoffe.classList.add('pressed')
      break
    case 'fire':
      buttonSoundPressedControl = nameButtonPressed
      buttonSoundFire.classList.add('pressed')
      break
    default:
      break
  }
}

function resetButtonsSounds(){
  buttonSoundForest.classList.remove('pressed')
  buttonSoundRain.classList.remove('pressed')
  buttonSoundCoffe.classList.remove('pressed')
  buttonSoundFire.classList.remove('pressed')
}

export {
    buttonPlay,
    buttonStop,
    buttonMoreTime,
    buttonLessTime,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffe,
    buttonSoundFire,
    spanMinutes,
    spanSeconds,
    buttonSoundPressed,
    resetButtonsSounds
}
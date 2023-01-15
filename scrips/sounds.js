export default function Sounds(){
    const audioForest = new Audio('./sounds/Floresta.wav')
    const audioRain = new Audio('./sounds/Chuva.wav')
    const audioCoffe = new Audio('./sounds/Cafeteria.wav')
    const audioFire = new Audio('./sounds/Lareira.wav')
    const alarm = new Audio('./sounds/alarm.mp3')

    let audioRunning = null// Guarda a música em execução ou null para nenhuma.

    function audioExecute(nameMusic){
        stopAll()
        switch(nameMusic){
            case audioRunning:
                audioRunning = null
                break
            case 'forest':
                audioForest.play()
                audioRunning = nameMusic
                break
            case 'rain':
                audioRain.play()
                audioRunning = nameMusic
                break
            case 'coffe':
                audioCoffe.play()
                audioRunning = nameMusic
                break
            case 'fire':
                audioFire.play()
                audioRunning = nameMusic
                break
            default:
                break;
        }
    }

    function stopAll(){
        audioForest.pause()
        audioRain.pause()
        audioCoffe.pause()
        audioFire.pause()
    }

    function chronometerAlarm(){
        alarm.play()
    }

    return{
        audioExecute,
        stopAll,
        chronometerAlarm
    }
}
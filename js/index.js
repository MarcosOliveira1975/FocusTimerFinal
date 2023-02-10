
let buttonPlay = document.querySelector('#play')
let buttonStop = document.querySelector('#stop')
let buttonPlus = document.querySelector('#plus')
let buttonMinus = document.querySelector('#minus')
let buttonPause = document.querySelector('#pause')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
let StopButtonSound = document.querySelector('#stopSounds')

const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

let buttonForest = document.querySelector('#forest')
let buttonRain = document.querySelector('#rain')
let buttonCafeteria = document.querySelector('#cafeteria')
let buttonFireplace = document.querySelector('#fireplace')

let buttonForestWhite = document.querySelector('#forestWhite')
let buttonRainWhite = document.querySelector('#rainWhite')
let buttonCafeteriaWhite = document.querySelector('#cafeteriaWhite')
let buttonFireplaceWhite = document.querySelector('#fireplaceWhite')

const buttonPressForest = new Audio("./assets/Floresta.wav")
const buttonPressRain = new Audio("./assets/Chuva.wav")
const buttonPressCafeteria = new Audio("./assets/Cafeteria.wav")
const buttonPressFireplace = new Audio("./assets/Lareira.wav")

const alarm = new Audio("./assets/alarm.mp3")

function playAlarm() {
    alarm.play()
}

function updateDisplay (minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    updateDisplay(0, 0)
    clearTimeout(timerTimeOut)

}

function countDown() {
    timerTimeOut = setTimeout(function() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
       
        
       secondsDisplay.textContent = "00"

        updateDisplay(minutes, 0)

      if (minutes <= 0) {
        alarm.play()
        reset()

        return
      }

        if (seconds <= 0) {
            seconds = 60
            --minutes
        }
        
        updateDisplay(minutes, String(seconds - 1))
        
        countDown()
        }, 1000)
}


buttonPlay.addEventListener('click', function () {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    countDown()

    buttonPress.play()
})

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')   
    clearTimeout(timerTimeOut)
    buttonPress.play()

})

buttonStop.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

    reset()
    buttonPress.play()
    
})

buttonPlus.addEventListener('click', function() {
    minutesDisplay.textContent = String(minutes = (minutes + 5)).padStart(2, "0")
    buttonPress.play()
})

buttonMinus.addEventListener('click', function() {
    minutesDisplay.textContent = String(minutes = (minutes - 5)).padStart(2, "0")
    buttonPress.play()
})

buttonForest.addEventListener('click', function () {
    buttonForest.classList.add('hide')
    buttonForestWhite.classList.remove('hide')
    
    buttonForestWhite.classList.add('active')
    buttonRain.classList.remove('active')
    buttonCafeteria.classList.remove('active')
    buttonFireplace.classList.remove('active')

    buttonPressForest.play()
    buttonPressCafeteria.pause()
    buttonPressRain.pause()
    buttonPressFireplace.pause()
})

buttonRain.addEventListener('click', function () {
    buttonRain.classList.add('hide')
    buttonRainWhite.classList.remove('hide')
    
    buttonRainWhite.classList.add('active')
    buttonForest.classList.remove('active')
    buttonCafeteria.classList.remove('active')
    buttonFireplace.classList.remove('active')

    
    
    buttonPressRain.play()
    buttonPressCafeteria.pause()
    buttonPressForest.pause()
    buttonPressFireplace.pause()

})

buttonCafeteria.addEventListener('click', function () {
    buttonCafeteria.classList.add('hide')
    buttonCafeteriaWhite.classList.remove('hide')
    
    buttonCafeteriaWhite.classList.add('active')
    buttonRain.classList.remove('active')
    buttonForest.classList.remove('active')
    buttonFireplace.classList.remove('active')

    
    buttonPressCafeteria.play()
    buttonPressForest.pause()
    buttonPressRain.pause()
    buttonPressFireplace.pause()
})

buttonFireplace.addEventListener('click', function () {
    buttonFireplace.classList.add('hide')
    buttonFireplaceWhite.classList.remove('hide')
   
    buttonFireplaceWhite.classList.add('active')
    buttonRain.classList.remove('active')
    buttonCafeteria.classList.remove('active')
    buttonForest.classList.remove('active')

    buttonPressFireplace.play()
    buttonPressForest.pause()
    buttonPressCafeteria.pause()
    buttonPressRain.pause()
})

StopButtonSound.addEventListener('click', function() {
    buttonPressFireplace.pause()
    buttonPressForest.pause()
    buttonPressCafeteria.pause()
    buttonPressRain.pause()

    buttonForest.classList.remove('active')
    buttonRain.classList.remove('active')
    buttonCafeteria.classList.remove('active')
    buttonFireplaceWhite.classList.remove('active')

    buttonForestWhite.classList.add('hide')
    buttonForest.classList.remove('hide')

    buttonRainWhite.classList.add('hide')
    buttonRain.classList.remove('hide')

    buttonCafeteriaWhite.classList.add('hide')
    buttonCafeteria.classList.remove('hide')

    buttonFireplaceWhite.classList.add('hide')
    buttonFireplace.classList.remove('hide')

})
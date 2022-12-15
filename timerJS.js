let minutes = 10
let seconds = 00
let isPaused = false
let secZero = false

const time_sec = document.getElementById('time_sec')
const time_min = document.getElementById('time_min')


document.getElementById('start').onclick = function(){
    time_min.innerHTML = minutes<10 ? `0${minutes} ` : `${minutes}`
    time_sec.innerHTML = seconds<10 ? `0${seconds} ` : `${seconds}`

    let countDown = setInterval(sec,1000) 

}

document.getElementById('pause').onclick = function(){
    isPaused = true
}

document.getElementById('resume').onclick = function(){
    isPaused = false
}

function sec () {
    
    if(seconds < 0 ){
        if (minutes <= 10){
            minutes--
            time_min.innerHTML = `0${minutes}`
            seconds = 59 
        }
        else if(minutes > 0){
            minutes--
            time_min.innerHTML = `${minutes}`
            seconds = 59 
        }
        else{
            clearInterval(countDown) 
        }
    }

    if(!isPaused){
        if(seconds < 10){
            time_sec.innerHTML = `0${seconds}`
            seconds--;
        }
        else{
            time_sec.innerHTML = `${seconds}`
            seconds--;
        }
    }

}

function min() {
    return minutes--
}

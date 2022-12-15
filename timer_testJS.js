let ini_hour,ini_minutes,ini_seconds = 0
let hour,minutes,seconds = 0
let isPaused = false
let len = 0
let num,num1,num2,num3,num4,num5,num6 = 0
let smh = ''
let time = ''

document.getElementById('my_time').addEventListener('input',unit)

const time_hr = document.getElementById('time_hr')
const time_sec = document.getElementById('time_sec')
const time_min = document.getElementById('time_min')

visual("inline","none","none","none","none")

document.getElementById('start').onclick = function(){
    let my_time = document.getElementById('my_time').value

    for (var i = 0; i < my_time.length; i++) {
        if(my_time.charAt(i) === "h"){
            smh += my_time.charAt(i)
        }
        else if(my_time.charAt(i) === "m"){
            smh += my_time.charAt(i)
        }
        else if((my_time.charAt(i) === "s")){
            smh += my_time.charAt(i)
        }
        else{
            time += my_time.charAt(i)
        }
      }


    num = time.length
    hour = +time.slice(num6 = num-6<0 ? 0:num-6 , num5 = num-4<0 ? 0:num-4)
    minutes = +time.slice(num4 = num-4<0 ? 0:num-4 , num3 = num-2<0 ? 0:num-2) 
    seconds = +time.slice(num2 = num-2<0 ? 0:num-2 , num1 = num-0<0 ? 0:num-0)

    ini_hour = hour
    ini_minutes = minutes
    ini_seconds = seconds

    if (minutes > 60) {
        hour = hour + Math.floor(minutes / 60)
        minutes = minutes % 60
    }
    
    if (seconds > 60) {
        minutes = minutes + Math.floor(seconds / 60)
        seconds = seconds % 60
    }

    oneDigit()

    //Input -> Blank
    document.getElementById('my_time').value = null
    time = ''

    isPaused = false
    countDown = setInterval(timer,1000)

    visual("none","inline","none","none","inline")
    
}


document.getElementById('pause').onclick = function(){
    isPaused = true

    sleep(1000)
    document.getElementById('resume').style.display = 'inline'
}


document.getElementById('resume').onclick = function(){
    isPaused = false
    countDown = setInterval(timer,1000)

    document.getElementById('resume').style.display = 'none'
}


document.getElementById('reset').onclick = function(){
    isPaused = true
    hour = 0
    minutes = 0
    seconds = 0
    oneDigit()
    
    visual("inline","none","none","none","none")
}


document.getElementById('restart').onclick = function(){
    hour = ini_hour
    minutes = ini_minutes
    seconds = ini_seconds

    oneDigit()

    isPaused = false
    countDown = setInterval(timer,1000)

    visual("none","inline","none","none","inline")
}


function timer () {

    if(!isPaused){

        if(seconds == 0 && minutes == 0 && hour == 0 ){
            var audio = new Audio('alarm.wav');
            audio.play();
            time_sec.innerHTML = `0${seconds}`
            clearInterval(countDown)
            countDown = null
            
            visual('inline','none','none','inline','none')
        }
        else if(seconds == 0){
            if(minutes == 0 ){
                if(hour == 0){
                    minutes = 59
                    time_min.innerHTML = `${minutes}`
                    seconds = 59
                    time_sec.innerHTML = `${seconds}`
                }
                else if(hour <= 10){
                    hour --
                    time_hr.innerHTML = `0${hour}`
                    minutes = 59
                    time_min.innerHTML = `${minutes}`
                    seconds = 59
                    time_sec.innerHTML = `${seconds}`
                }
                else{
                    hour --
                    time_hr.innerHTML = `${hour}`
                    minutes = 59
                    time_min.innerHTML = `${minutes}`
                    seconds = 59
                    time_sec.innerHTML = `${seconds}`
                }
            }
            else if(minutes <= 10){
                minutes--
                time_min.innerHTML = `0${minutes}`
                seconds = 59
                time_sec.innerHTML = `${seconds}`
            }
            else{
                minutes--
                time_min.innerHTML = `${minutes}`
                seconds = 59
                time_sec.innerHTML = `${seconds}`
            }
        }
        else if(seconds <= 10){
            seconds--;
            time_sec.innerHTML = `0${seconds}`
        }
        else{
            seconds--;
            time_sec.innerHTML = `${seconds}`
        }

    }
    
    else{
        clearInterval(countDown)
        countDown = null
    }

}


//Detecting only number keys (For user to input only numbers)
function onlyNumberKey(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;

}


//Sleep function
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

  
//Adding h,m,s to input
function unit(){
    let my_time = document.getElementById('my_time').value

    if(my_time.length == 1 && check){
        document.getElementById('my_time').value = my_time + 's'
    }

    if(my_time.length == 3 && check){
        document.getElementById('my_time').value = my_time.slice(0,1) + my_time.slice(2,3) + 's'
    }

    if(my_time.length == 4 && check){
        document.getElementById('my_time').value = my_time.slice(0,1) + 'm' + my_time.slice(1,2) + my_time.slice(3,4) + 's'
    }

    if(my_time.length == 6 && check){
        document.getElementById('my_time').value = my_time.slice(0,1) + my_time.slice(2,3) + 'm' + my_time.slice(3,4) + my_time.slice(5,6) + 's'
    }

    if(my_time.length == 7 && check){
        document.getElementById('my_time').value = my_time.slice(0,1) + 'h' + my_time.slice(1,2) + my_time.slice(3,4) + 'm' + my_time.slice(4,5) + my_time.slice(6,7) + 's'
    }

    if(my_time.length == 9 && check){
        document.getElementById('my_time').value = my_time.slice(0,1) + my_time.slice(2,3) + 'h' + my_time.slice(3,4) + my_time.slice(5,6) + 'm' + my_time.slice(6,7) + my_time.slice(8,9) + 's'
    }
}


//Detecting only backspace key (For user to change time in input)
my_time.onkeydown = function(e) {
    const key = e.key;
    if (key === "Backspace") {
      check = false
    }
    else {
        check = true
    }
}


//Visual setting
function visual(start,pause,resume,restart,reset){
    document.getElementById('start').style.display = start
    document.getElementById('pause').style.display = pause
    document.getElementById('resume').style.display = resume
    document.getElementById('restart').style.display = restart
    document.getElementById('reset').style.display = reset
}


//00:00:00
function oneDigit(){
    time_hr.innerHTML = hour<10 ? `0${hour} ` : `${hour}`
    time_min.innerHTML = minutes<10 ? `0${minutes} ` : `${minutes}`
    time_sec.innerHTML = seconds<10 ? `0${seconds} ` : `${seconds}`
}
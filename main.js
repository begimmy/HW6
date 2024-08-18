
let timer = document.getElementById('timer');
let count = document.getElementById('count');
let countResult = document.getElementById('countResult');
let click = document.getElementById('click');
let reset = document.getElementById('reset');

let start = timer.value;

timer.onchange = () =>{
    if(timer.value>=30){
        timer.value = 30;
    }
    else if(timer.value<=5){
        timer.value =5;
    }
}

const stopFunc = () =>{
    click.disabled = true;
    countResult.textContent = (count.textContent / start).toFixed(1);
}

let interval;

const timeStart = () =>{
    interval = setInterval(() => {
        timer.value -= 1;
        if(timer.value<1){
            clearInterval(interval);
        }
    },1000)
}

let i = 0;
let timeOut;

click.onclick = () => {
    if(i<1){
        timeOut = setTimeout(() =>{
            stopFunc();
        }, timer.value * 1000);
        timeStart();
    }
    i+=1;
    count.textContent = i;
}

reset.addEventListener('click', resetAll)

function resetAll(reset){
    timer.value = 15;
    count.textContent = 0;
    countResult.textContent = 0;
    click.disabled = false;

  
    let i = 0;
    click.onclick = () => {
        
        if(i<1){
            timeOut = setTimeout(() =>{
                stopFunc();
            }, timer.value * 1000);
            timeStart();
        }
        i+=1;
        count.textContent = i;
        
    }

    timer.onchange = () =>{
        if(timer.value>=30){
            timer.value = 30;
        }
        else if(timer.value<=5){
            timer.value =5;
        }
    }
}






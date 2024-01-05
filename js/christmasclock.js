const clock=document.querySelector("#clock");

function getTime() {
    const christmasDay=new Date(`${new Date().getFullYear()}-12-25:00:00:00`);
    const now=new Date();

    const difference=new Date(christmasDay-now);
    const secondsInMs=Math.floor(difference/1000);
    const minutesInMs=Math.floor(secondsInMs/60);
    const hoursInMs=Math.floor(minutesInMs/60);
    const days=Math.floor(hoursInMs/24);
    const seconds=secondsInMs%60;
    const minutes=minutesInMs%60;
    const hours=hoursInMs%24;
    const dayStr=String(days).padStart(2,"0");
    const hourStr=String(hours).padStart(2,"0");
    const minuteStr=String(minutes).padStart(2,"0");
    const secondStr=String(seconds).padStart(2,"0");
    clock.innerText=`${dayStr}d ${hourStr}h ${minuteStr}m ${secondStr}s`
}

getTime();
setInterval(getTime,1000);
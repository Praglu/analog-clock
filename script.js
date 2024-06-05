const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const dateDisplay = document.querySelector('.date-display');

MONTH_NAME = {
    0: 'Stycznia',
    1: 'Lutego',
    2: 'Marca',
    3: 'Kwietnia',
    4: 'Maja',
    5: 'Czerwca',
    6: 'Lipca',
    7: 'Sierpnia',
    8: 'Września',
    9: 'Października',
    10: 'Listopada',
    11: 'Grudnia'
}

function setClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth();

    const secondsRotation = (seconds / 60) * 360;
    const minutesRotation = ((minutes + seconds / 60) / 60) * 360;
    const hoursRotation = ((hours + minutes / 60) / 12) * 360;

    secondHand.style.transform = `rotate(${secondsRotation}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
    hourHand.style.transform = `rotate(${hoursRotation}deg)`;
    dateDisplay.textContent =  day + ' ' + MONTH_NAME[month];
}

setClock();
setInterval(setClock, 1000);

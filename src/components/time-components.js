import data from '../data.js';


function getTimeComponent() {
    const time = document.createElement('div');
    time.className = 'time';

    const minutes = document.createElement('span');
    minutes.innerText = (data.minutes) < 10 ? '0' + data.minutes + ':' : data.minutes + ':';

    const seconds = document.createElement('span');
    seconds.innerText = (data.seconds) < 10 ? '0' + data.seconds + ':' : data.seconds + ':';

    const milliseconds = document.createElement('span');
    milliseconds.innerText = (data.milliseconds) < 10 ? '00' + data.milliseconds :
    (data.milliseconds < 100 ? '0' + data.milliseconds : data.milliseconds);

    time.append(minutes, seconds, milliseconds);

    return time;
}

export default getTimeComponent;
import data from '../data.js';
import getTimeComponent from '../components/time-components.js';

const timeElement = document.getElementById('time');

function resetHandler() {
    if (data.interval) {
        clearInterval(data.interval);
        data.interval = null;
    }
    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;
    const timeReset = getTimeComponent(data);
    timeElement.innerHTML = '';
    timeElement.append(timeReset);
}

export default resetHandler;
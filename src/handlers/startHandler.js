import data from '../data.js';
import watchTime from '../logic/time-components.js';
import getTimeComponent from '../components/time-components.js';


const timeElement = document.getElementById('time');

function startHandler() {

if (data.interval !== null) {
    data.interval = clearInterval(data.interval);
}

data.interval = setInterval(function() {
    let time = watchTime();
    let timeComponenet = getTimeComponent(time);

    timeElement.innerHTML = '';
    timeElement.append(timeComponenet);
}, 10);
}
export default startHandler;
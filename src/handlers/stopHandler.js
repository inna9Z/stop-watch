import data from '../data.js';

function stopHandler() {
    if (data.interval) {
        clearInterval(data.interval);
        data.interval = null;
    }
}

export default stopHandler;
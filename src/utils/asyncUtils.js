async function animateValue(startValue, endValue, duration, updateCallback, finalCallback) {
    
    const sycles = Math.floor(duration / Math.abs(startValue - endValue));
    
    if (typeof updateCallback === "function") updateCallback(startValue);

    

    for (let i = startValue; i <= endValue; i++){

        if (typeof updateCallback === "function") updateCallback(i);
        await sleep(sycles);
    }
    
    if (typeof finalCallback === "function") finalCallback(endValue);
}

async function sleep(ms = 2000, finalCallback = null) {
    if (typeof finalCallback === "function") {
        
        await sleep(ms);
        
        finalCallback();
        return true
    }

    return new Promise(resolve => setTimeout(resolve, ms));
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {animateValue, sleep, random};
    
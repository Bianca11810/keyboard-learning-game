const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const timestamps = [];

function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey(){
    console.log(keys[getRandomNumber(0, keys.length-1)]);
    return keys[getRandomNumber(0, keys.length-1)];
    
}

function targetRandomKey(){
    const key = document.getElementById(getRandomKey().toLowerCase(w));
    console.log('this is the target rand key', key);
    key.classList.add("selected");
}

const getTimestamp = () =>{
    return Math.floor(Date.now() / 1000)
}

document.addEventListener("keyup", event => {
    // const keyPressed = String.fromCharCode(event.key.code);
    const keyPressed = event.key.toLowerCase()
    console.log(keyPressed);
    const keyElement = document.getElementById(keyPressed);
    const highlightedKey = document.querySelector('.selected');
    console.log(highlightedKey);
    keyElement.classList.add('hit');

    keyElement.addEventListener('animationend', ()=>{
        keyElement.classList.remove('hit')
    })

    if(keyPressed === highlightedKey.id){
        timestamps.unshift(getTimestamp());
        const elaspedTime = timestamps[0] - timestamps[1];

        highlightedKey.classList.remove("selected");
        targetRandomKey();
    }

})
targetRandomKey();


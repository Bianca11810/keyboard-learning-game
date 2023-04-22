const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const timestamps = [];

const getTimestamp = () =>{
    return Math.floor(Date.now() / 1000)
}

document.addEventListener("keyup", event => {
    const keyPressed = String.fromCharCode(event.key.code);
    const keyElement = document.getElementById(keyPressed);
    const highightedKey = document.querySelector('.selected ');

    keyElement.classList.add('hit');

    keyElement.addEventListener('animationend', ()=>{
        keyElement.classList.remove('hit')
    })

    if(keyPressed === highightedKey.innerHTML){
        timestamps.unshift(getTimestamp());
        const elaspedTime = timestamps[0] - timestamps[1];

        highlightedKey.classList.remove("selected");
        targetRandomKey();
    }

})
targetRandomKey();
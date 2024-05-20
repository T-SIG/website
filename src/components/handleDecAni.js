// characters for randomizations
const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&|?></\\";

export function handleDecryptionAnimation(element,text) {
    //defines interval
    let interval = null
    let letterSpeed = 80
    let iteratorController = 1/4

    clearInterval(interval)

    element.innerText = text;
    
    let iterator = 0
    let arbitraryValues = randomArray(text.length);

    interval = setInterval(() => {
        element.innerText = text
            .split("")
            .map((letter, index) => {
                if (iterator >= arbitraryValues[index]) {
                    return text[index];
                }
                return chars[randomNumber(chars.length)];
            })
            .join("");
            if (iterator === text.length) {
                clearInterval(interval)
            }
            iterator += iteratorController
        }, letterSpeed);
}

// function that generates random number of given lenghts
function randomNumber(length) {
    return Math.floor(Math.random()*length)
}

function randomArray(length) {
    let randomArray = []
    let tmp = randomNumber(length)
    while (true) {
        if (!randomArray.includes(tmp)) {
            randomArray.push(tmp)
        } else {
            tmp = randomNumber(length)
        }
        if (randomArray.length >= length) {
            break
        }
    }
    return randomArray
}

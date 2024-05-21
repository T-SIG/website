// characters for randomizations
const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&|?></\\";

let interval;
export function handleDecryptionAnimation(element,text) {

    let iterator = 0
    let iteratorController = 1/2
    let letterSpeed = 150

    let arbitraryValues = randomArray(text.length);

    element.innerText = text;
    
    if (interval) {
        clearInterval(interval)
        runInterval(text,element,iterator,iteratorController,letterSpeed,arbitraryValues)
        return
    } else {
    runInterval(text,element,iterator,iteratorController,letterSpeed,arbitraryValues)
    }
}
// function that generates random number of given lenghts
function randomNumber(length) {
    return Math.floor(Math.random()*length)
}
// populate array with random numbers
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
function runInterval(text,element,iterator,iteratorController,letterSpeed,arbitraryValues) {
    return interval = setInterval(()=>{
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
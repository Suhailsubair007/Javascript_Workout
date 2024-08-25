const str = 'hello suhail how are you';
const wordArray = str.split(' ')

    let largestWord = ''

    for (const word of wordArray) {
        if (word.length > largestWord.length) {
            largestWord = word
        }
    }
    

console.log(largestWord);
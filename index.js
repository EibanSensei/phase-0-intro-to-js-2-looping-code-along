// Code your solutions in this file
function writeCards(names) {

    const resultArray = [] 

    for (let name of names) {
      resultArray.push(`Thank you, ${name}, for the wonderful surprise gift!`)
    }

    return resultArray
}

function countDown (count) {
    while (count >= 0) {
        console.log(count);
        count--;
    }
}
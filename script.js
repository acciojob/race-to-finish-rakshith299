window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for(let i = 0; i < 5; i++){

    const max = 5;
    const min = 1;
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    promises.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolved after ${randomNumber} sec`);
        }, randomNumber * 1000)
    }))

}

const div = document.getElementById("output");

Promise.any(promises)

.then((result) => {   
    div.innerText = result;
})

.catch((result) => {
    div.innerText = "All Promises are rejected";
})
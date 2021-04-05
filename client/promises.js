// == Exemplu 1 ==
let p = new Promise((resolve, reject) => {
    let a = 4;
    if (a % 2 == 1) {
        resolve('Este par');
    } else {
        reject('Nu este par');
    }
});

p.then((message) => {
    console.log('Succes, numarul ' + message);
}).catch((message) => {
    console.log('Failed, numarul')
});

// == Exemplu 2 ==
// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// });


// == Exemplul 2 dar cu Promise ==
const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
});


// == Exemplul 4 ==
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded');
});


Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('success'), 4000);
})

promise .then (
    result => console.log(result),
    error => console.log(error)
)


let promise3 = Promise.resolve('success').then(function(value) {
    setTimeout(() => console.log(value), 4000); 
})

let promise4 = Promise.reject( new Error('faild')).then(function(value) {
    console.log(value)  
}, function (error) {
    error.message = 'Oooops something went wrong';
    console.log(error);
})

let urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url)
    .then(console.log)                 
    .catch(Error)
))
.then(data => {
// do something with the data
});

let user;
async function getPromise() {
    let data = await fetch('https://swapi.co/api/starships/9/');
    user = await data.json();
}

getPromise().then(console.log(user));
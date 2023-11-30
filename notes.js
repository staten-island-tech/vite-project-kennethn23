/* function greet(name) {
    const greetPromise = new Promise(function(resolve, reject){
        resolve(`Hello ${name}`);
    });
    return greetPromise;
}

const aaron = greet("Aaron");
console.log(aaron);
// handle the promise
aaron.then((result) => {
    console.log(result);
}); */


// REST API
const url = `https://api.quotable.io/random`;

async function getData(url){
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch (error) {

    }
}
getData(url);
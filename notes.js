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
    let pokemon = "pikachu";
    try {
        const response = await fetch(url);
        if (response.status != 200) {
            throw new Error(pokemon);
            // throw new Error(response.statusText);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch (error) {
        document.querySelector("h1").textContent = `Sorry, we could not find ${pokemon}`;
        //document.querySelector("h1").textContent = error;
    }
}
getData(url);
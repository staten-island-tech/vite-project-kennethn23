/* for (i=0;i <=7; i++){
    console.log(i);
}

// for (start, end, iteration){
}

while(i < 7){
    console.log(i);
    i++;
} */

// i++ increment by 1
// i-- decrement by 1
// i += 3 increment by greater than 1
// i -= 5 decrement by greater than 1








/* numsArray = [1, 2, 3, 4, 5];

function linearSearch(number, array){
    let found;
    // for loop is iteration
    for(let i = 0; i < array.length; i++){
        // evaluations and if statements are selection
        if(array[i] === number){
            found = array[i];
            break;
        } else{
            console.log("still looking");
        }
    }
    if(!found){
    // if(found == null) {
        console.log("no number")
    } else {
        console.log(found);
    }
    return found;
};

linearSearch(50, numsArray) */





/* let integer = prompt("Integer between 1 and 100");
let yesterday = prompt("Yesterday's parking spaces");
let today = prompt("Today's parking spaces");

function parkingSpaces(num, yesterday, today) {
    let counter = 0; 
    for (let i = 0; i <= integer; i++) {
        if (yesterday[i] === today[i] && yesterday[i] === "C"){
            counter += 1;
        };
    };
    console.log(counter);
}

parkingSpaces(integer, yesterday, today); */




let loop = Number(prompt("Number of times to run fibonacci sequence"));

function fibonacci(num) {
    let fibSequence = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    };
    console.log(fibSequence[fibSequence.length - 1]);
};

fibonacci(loop);
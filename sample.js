/* for (i=0;i <=7; i++){
    console.log(i);
}

while(i < 7){
    console.log(i);
    i++;
} */

// i++ increment by 1
// i-- decrement by 1
// i += 3 increment by greater than 1
// i -= 5 decrement by greater than 1

numsArray = [1, 2, 3, 4, 5];

function linearSearch(number, array){
    let found;
    for(let i = 0; i < array.length; i++){
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

linearSearch(50, numsArray)
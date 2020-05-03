/* Write a function called "removeFromFrontOfNew".
Given an array, "removeFromFrontOfNew" returns a new array 
containing all but the first element of the given array. */

// 1 input - an array 
function removeFromFrontOfNew(arr) {
    // creates a new array 
    var newArr = arr.slice();
    // removes the first element of the new array
    newArr.shift();
    //returns the new array
    return newArr;
}


// testing our function by calling it 
console.log(removeFromFrontOfNew([1, 2, 3, 4, 5, 6])); // --> 2, 3, 4, 5, 6
console.log(removeFromFrontOfNew([300, 600, 700, 500])); // --> 600, 700, 500
console.log(removeFromFrontOfNew(['Michael','Karina', 'Austin', 'Twin'])); // --> Karina, Austin, Twin

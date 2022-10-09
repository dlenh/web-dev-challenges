// Twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function.

// myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// // call move left function with 'xyz' and myArray as arguments
// console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// // call move left function again, same arguments
// // Note that 'xyz' is already as far left as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// // call move right function this time, with 2 and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// // call move right function again, same arguments
// // Note that 2 is already as far right as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change

function moveLeft(element, arr) {
    i = arr.indexOf(element)
    if (i === 0) {
        return arr;
    } else {
        arr.splice(i - 1, 0, arr.splice(i, 1)[0])
        return arr;
    }
}

function moveRight(element, arr) {
    i = arr.indexOf(element)
    if (i === arr.length - 1) {
        return arr;
    } else {
        arr.splice(i + 1, 0, arr.splice(i, 1)[0])
        return arr;
    }
}
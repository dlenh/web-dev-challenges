// Write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. 

// myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// // call move up function with 'h' and myGrid
// console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// // Note that 'h' is already as far up as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// // call move down function again, same arguments
// // Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]


function moveUp(element, arr) {
    a = JSON.stringify(arr)
    i = a.indexOf(element)
    a2 = a.split("")
    if (i <= 11) {
        return arr;
    } else {  
        [a2[i], a2[i-14]] = [a2[i-14], a2[i]]
        return JSON.parse(a2.join(""))
    }
}

function moveDown(element, arr) {
    a = JSON.stringify(arr)
    i = a.indexOf(element)
    a2 = a.split("")
    if (i >= 31) {
        return arr;
    } else {  
        [a2[i], a2[i+14]] = [a2[i+14], a2[i]]
        return JSON.parse(a2.join(""))
    }
}
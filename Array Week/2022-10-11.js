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
    const row = arr.findIndex(row => row.includes(element));
    const col = arr[row].indexOf(element);
    if (row === 0) {
        return arr;
    } else {
        let temp = arr[row][col];
        arr[row][col] = arr[row-1][col];
        arr[row-1][col] = temp;
        return arr;
    }
}

function moveDown(element, arr) {
    const row = arr.findIndex(row => row.includes(element));
    const col = arr[row].indexOf(element);
    if (row === 0) {
        return arr;
    } else {
        let temp = arr[row][col]; // set a variable for the element that you want to move
        arr[row][col] = arr[row+1][col]; // set old position to the new position
        arr[row+1][col] = temp; // set new position to temp
        return arr;
    }
}
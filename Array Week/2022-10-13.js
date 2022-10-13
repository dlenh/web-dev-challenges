// Create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place.

// myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

function shuffleArray(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            i1 = Math.floor(Math.random() * arr.length);
            j1 = Math.floor(Math.random() * arr.length);

            let temp = arr[i][j];
            arr[i][j] = arr[i1][j1];
            arr[i1][j1] = temp;
        }
    }
    return arr;
}
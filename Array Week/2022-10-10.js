// Write a function that takes in a given array of strings and move any entries containing the letter 'a' to the front, and then move any entries that have over 3 characters to the back. Please preserve the order of things while you do this!

// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function move(arr) {
    a = arr.filter(x => x.includes("a"))
    three = arr.filter(x => x.length > 3)
    mid = arr.filter(x => !x.includes("a") && x.length < 3)
    return a.concat(mid,three)
}
// Hidden message by manipulating a given string
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

function fixString(s) {
    obj = {
        "0": "O",
        "1": "I",
        "2": "Z",
        "3": "E",
        "4": "h",
        "5": "S",
        "6": "G",
        "7": "L",
        "8": "B",
        "9": "q",
        "O": "0",
        "I": "1",
        "Z": "2",
        "E": "3",
        "h": "4",
        "S": "5",
        "G": "6",
        "L": "7",
        "B": "8",
        "q": "9"
    }
    return s.split("").map(x => obj[x] === undefined ? x : obj[x]).join("")
}
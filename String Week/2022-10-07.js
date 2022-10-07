// Create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

// 'A'  // first letter of the alphabet, uppercase
// 'z'  // last letter of the alphabet, lowercase

// 'p'  // 16th letter of the alphabet, lowercase
// 'K'  // 16th letter from *end* of alphabet, uppercase

// 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// // function replaces letters with opposites
// 'Example: 0 number or punctuation changes'

function flip(s) {
    lower = "abcdefghijklmnopqrstuvwxyz"
    lowerFlipped = lower.split("").reverse().join("")
    upper = lower.toUpperCase()
    upperFlipped = upper.split("").reverse().join("")
    return s.split("").map(x => {
        if (lower.includes(x) && x === x.toLowerCase()) {
            return upperFlipped[lower.indexOf(x)]
        } else if (upper.includes(x) && x === x.toUpperCase()) {
            return lowerFlipped[upper.indexOf(x)]
        } else {
            return x
        }
    }).join("")
}


const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// Day 1
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

afterDay1 = 'e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs'


// Day 3
function space(str) {
    return str.replaceAll("S", " ").replaceAll("p", " ").replaceAll("a", " ").replaceAll("c", " ").replaceAll("e", " ")
}

afterDay3 = ' !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs'


// Day 4
function reverseString(s) {
    return s.split("").reverse().join("")
}

afterDay4 = 'sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! '


// Day 6
function remove(s,num) {
    return s.split("").filter((x,i) => (i+1)%num).join("");
}

afterDay6 = 'sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!'


// Day 7
function flip(s) {
    lower = "abcdefghijklmnopqrstuvwxyz"
    lowerFlipped = lower.split("").reverse().join("")
    upper = lower.toUpperCase()
    upperFlipped = upper.split("").reverse().join("")
    return s.split("").map(x => {
        if (lower.includes(x) && x === x.toLowerCase()) {
            return upperFlipped[lower.indexOf(x)]
        } else if (upper.includes(x) && x === x.toUpperCase()) {
            return lowerFlipped[upper.indexOf(x)]
        } else {
            return x
        }
    }).join("")
}

afterDay7 = 'HUNTOBER 1 week down. #100Devs WE GO GET!!'
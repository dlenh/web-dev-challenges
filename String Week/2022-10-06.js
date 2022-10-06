// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string.

// // For the string below and 4
// "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// // remove decoy strings
// "This is Halloween! This is Halloween!"

// // For the string below and 5
// "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// // remove decoy strings and preach 🙌
// "The Bachelor is a terrible television show."

function remove(s,num) {
    return s.split("").filter((x,i) => (i+1)%num).join("");
}


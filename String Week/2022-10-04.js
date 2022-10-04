// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// // reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "


s = "   The white space at the beginning of this string doesn't match the whitespace at the end. "

function reverseString(s) {
    return s.split("").reverse().join("")
}
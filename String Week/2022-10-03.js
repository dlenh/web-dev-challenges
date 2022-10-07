// example key characters -> 'A','_','K','E','Y','!'

// 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// // implement key replacement function
// ' you could think this is hard to read before replacing the key characters'

str = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

function space(str) {
    return str.replaceAll("A", " ").replaceAll("_", " ").replaceAll("K", " ").replaceAll("E", " ").replaceAll("Y", " ").replaceAll("!", " ")
}

// use replaceAll method instead of global variable in regular expression /g

// using key info from Day 2

function space(str) {
    return str.replaceAll("S", " ").replaceAll("p", " ").replaceAll("a", " ").replaceAll("c", " ").replaceAll("e", " ")
}
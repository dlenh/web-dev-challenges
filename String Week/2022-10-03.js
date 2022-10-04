// example key characters -> 'A','_','K','E','Y','!'

// 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// // implement key replacement function
// ' you could think this is hard to read before replacing the key characters'

str = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

str.replaceAll("A", " ").replaceAll("_", " ").replaceAll("K", " ").replaceAll("E", " ").replaceAll("Y", " ").replaceAll("!", " ")

// use replaceAll method instead of global variable in regular expression /g
puns = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

// No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
trimmed = puns.split(",").filter(x => x.split("")[0] !== " " && x.split("")[x.split("").length - 1] !== " ")

// Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
filtered = trimmed.filter(x => !x.match(/dog/ig)).filter(x => !x.match(/bark/ig)).filter(x => !x.match(/bone/ig))

// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
mult5 = filtered.filter(x => x.split("").length%5)

// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
odd = mult5.filter(x => (x.charCodeAt(0) + x.charCodeAt(x.length - 1))%2)

// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
mid = odd.filter(x => {
    if (!x.length%2) {
        return x.slice(x.length/2)[0] !== "e"
    } else {
        return x.slice(x.length/2 + 1)[0] !== "e"
    }
})

// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
lower = mid.map(x => x.split("")).filter(x => {
    alph = "abcdefghijklmnopqrstuvwxyz"
    lower = 0
    for (i = 0; i < x.length; i++) {
        if (alph.includes(x[i])) {
            lower += 1;
        }
    }
    return lower%2 === 0
}).map(x => x.join(""))

// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
upper = lower.map(x => x.split("")).filter(x => {
    alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    upper = 0
    for (i = 0; i < x.length; i++) {
        if (alph.includes(x[i])) {
            upper += 1
        }
    }
    return upper >= 2
}).map(x => x.join(""))

// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
noS = upper.filter(x => !x.includes("S"))

['Teenage Mewtant Ninja Turtles', 'Rick & Meowty', "Mewster Rogers' Neighborhood"]
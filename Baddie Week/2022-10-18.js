// Apply the principles of helper functions and self-documenting code to this mess of a code snippet below

function findDateAndCompareToTwoDates(dateA, dateB) {
    const dateC = new Date()
    const daysFromAtoC = Math.ceil(Math.abs(dateC.getTime() - dateA.getTime()) / (1000*60*60*24))
    const daysFromBtoC = Math.ceil(Math.abs(dateC.getTime() - dateB.getTime()) / (1000*60*60*24))
    const aString = dateA.toDateString()
    const bString = dateB.toDateString()
    return {dateC: dateC, daysFromAtoC: daysFromAtoC, daysFromBtoC: daysFromBtoC, aString: aString, bString: bString}
}

function comparingTwoDates(dateA, dateB) {
    // const dateC = new Date()
    // const daysFromAtoC = Math.ceil(Math.abs(dateC.getTime() - dateA.getTime()) / (1000*60*60*24))
    // const daysFromBtoC = Math.ceil(Math.abs(dateC.getTime() - dateB.getTime()) / (1000*60*60*24))
    // const aString = dateA.toDateString()
    // const bString = dateB.toDateString()
    dates = findDateAndCompareToTwoDates(dateA,dateB);

    if (dates.daysFromAtoC *2 < dates.daysFromBtoC) { return `If you thought ${dates.aString} was a long wait, wait until you see how long it is until ${dates.bString}.` } 
    
    if (dates.daysFromAtoC < dates.daysFromBtoC) { return `Don't worry, ${dates.bString} isn't too much farther away than ${dates.aString} in the scheme of things.` } 
    
    if (dates.daysFromAtoC === dates.daysFromBtoC) { return `They're the same number of days away!` } 
        
    return `You know ${dates.dateA} is closer, right?`
}

function howFarOutTwoDatesAre(dateA, dateB) {
    // const dateC = new Date()
    // const daysFromAtoC = Math.ceil(Math.abs(dateC.getTime() - dateA.getTime()) / (1000*60*60*24))
    // const daysFromBtoC = Math.ceil(Math.abs(dateC.getTime() - dateB.getTime()) / (1000*60*60*24))
    // const aString = dateA.toDateString()
    // const bString = dateB.toDateString()
    dates = findDateAndCompareToTwoDates(dateA,dateB);
    
    if (dates.daysFromAtoC < dates.daysFromBtoC) {
        const x = Math.floor(dates.daysFromBtoC/dates.daysFromAtoC)
        return `Looks like ${dates.bString} is ${x} times farther away than ${dates.aString}.`
    } 
    
    if (dates.daysFromAtoC === dates.daysFromBtoC) {
        return `Same exact date there, mate.`
    } 

    const x = Math.floor(dates.daysFromAtoC/dates.daysFromBtoC)
    return `Looks like ${dates.aString} is ${x} times farther away than ${dates.bString}.`
}

function daysUntilDates(dateA, dateB) {
    // const dateC = new Date()
    // const daysFromAtoC = Math.ceil(Math.abs(dateC.getTime() - dateA.getTime()) / (1000*60*60*24))
    // const daysFromBtoC = Math.ceil(Math.abs(dateC.getTime() - dateB.getTime()) / (1000*60*60*24))
    // const aString = dateA.toDateString()
    // const bString = dateB.toDateString()
    dates = findDateAndCompareToTwoDates(dateA,dateB);

    const x = dates.daysFromBtoC - dates.daysFromAtoC

    return `You have ${dates.daysFromAtoC} days left until ${dates.aString}, and ${dates.daysFromBtoC} days left until ${dates.bString}.`
}
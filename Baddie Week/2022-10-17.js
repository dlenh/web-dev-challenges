// Simplify the example function below
function myExampleFunction(arr) {
    if (arr != null) {
        if (arr.length !== 0) {
            if (arr[0].length !== 0) {
                if (arr.length > 10) {
                    arr.push('maximum')
                } else if (arr.length === 10) {
                    arr.push('maximum') // returning the same thing so combine > 10 and === 10 to >= 10
                } else {
                    if (arr[0] === 'must be maximum') {
                        arr.push('failure')
                    } else if (arr[0] === 'flexible') {
                        arr.push('success')
                    }
                }
            }
        }
    }
    return arr
}


function myExampleFunction(arr) {
    if (arr == null || arr.length == 0) return arr;
    if (arr[0].length !== 0 && arr.length >= 10) arr.push("maximum")
    if (arr.length < 10 && arr[0] === "must be maximum") arr.push("failure")
    if (arr.length < 10 && arr[0] === "flexible") arr.push("success")

    return arr
}
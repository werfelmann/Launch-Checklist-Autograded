function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (typeof testInput == "number") {
        return "Is a Number"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return testInput
    };
 }

 console.log(validateInput("five"));
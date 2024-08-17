function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (!isNaN(testInput)) {
        return "Is a Number"
    } else {
        return "Not a Number"
    };
 }

 console.log(validateInput(""));
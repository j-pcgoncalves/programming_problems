/**
 * Create a function that reverses a string:
 * "Hi. My name is Andrei" should be:
 * "ierdnA si eman yM .iH"
 */

function reverse(str) {
    // Check Input
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Something is not right with your input.";
    }

    const strArr = str.split("");
    strArr.reverse();

    return strArr.join("");
}
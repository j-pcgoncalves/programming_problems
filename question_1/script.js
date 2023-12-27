/**
 * Given 2 arrays, create a function that
 * let's a user know (true / false) whether
 * these two arrays contain any common items
 * 
 * For Example:
 * const array1 = ["a", "b", "c", "x"];
 * const array2 = ["z", "y", "i"];
 * should return false.
 * 
 * -----------------------------------------
 * 
 * const array1 = ["a", "b", "c", "x"];
 * const array2 = ["z", "y", "x"];
 * should return true.
 */

// 2 parameters - arrays - no size limit
// return true or false (boolean)

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

/** Brute-Force Approach */
function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    
    return false;
}

// Time Complexity: O(a * b)

/** 2nd Approach */
function containsCommonItem2(arr1, arr2) {
    // Loop through first array and create object where properties === items in the array
    let map = {};

    for (let i = 0; i < arr1.length; i++) {
        const item = arr1[i];

        if (!map[item]) {
            map[item] = true;
        }
    }

    // Loop through second array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        const item = arr2[j];

        if (map[item]) {
            return true;
        }
    }

    return false;
}

// Time Complexity: O(a + b)
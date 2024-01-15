/**
 * Given an array and a target sum, return true
 * if there is a pair of integers inside the array
 * that sum to the target sum given.
 * 
 * For Example:
 * [1, 2, 3, 9] -> Target Sum: 8 // Return false
 * 
 * -----------------------------------------------
 * 
 * [1, 2, 4, 4] -> Target Sum: 8 // Return true
 */

// 2 parameters - 1 array of ints and 1 int (target sum) - no size limit
// Return true or false (boolean)

/** Naive Approach */
function hasPairWithSum(arr, sum) {
    var len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }

    return false;
}

// Time Complexity: O(a^2)
// Space Complexity: O(1)

/** Better Approach */
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }

        mySet.add(sum - arr[i]);
    }

    return false;
}

// Time Complexity: O(a)
// Space Complexity: O(a)
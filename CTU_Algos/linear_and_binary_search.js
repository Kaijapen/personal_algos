// ? example for testing
const myArray = [2, 3, 6, 9, 12, 15, 19]

// * Linear Search

function linSearch(elm, low, high, myArr)
{
    let index = low;
    while(index <= high){
        if (myArr[index] == elm) return index; // ! elm found

        else index++; // ! inc to continue while
    }
    return -1; // ! elm not found
}
console.log("Testing for linear search: ")
console.log(linSearch(10, 0, 6, myArray)) // ? returns -1
console.log(linSearch(12, 0, 6, myArray)) // ? returns 4

function binarySearch(elm, low, high, myArr) {
    while(high >= low) {
        let mid = Math.floor((low + high) / 2) // ! MUST use Math.floor for calculation because number could be a decimal
        if (myArr[mid] == elm) {
            return mid
        } // ! elm found
        else {
            if(myArr[mid] > elm) {
                high = mid - 1
            } // ! search left half of array
            else {
                low = mid + 1
            } //! search right half of array
        }
    }
    return -1; //! elm not found
}
console.log("Testing for binary search: ")
console.log(binarySearch(10, 0, 6, myArray)) // ? returns -1
console.log(binarySearch(12, 0, 6, myArray)) // ? returns 4


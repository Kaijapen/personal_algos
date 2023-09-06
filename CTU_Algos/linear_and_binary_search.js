// ? example for testing
const myArray = [4, 7, 8, 9, 12, 56]

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
console.log(linSearch(10, 0, 5, myArray)) // ? returns -1
console.log(linSearch(12, 0, 5, myArray)) // ? returns 4

function binarySearch(elm, low, high, myArr) {
    while(high >= low) {
        let mid = Math.floor((low + high) / 2)
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
console.log(binarySearch(10, 0, 5, myArray)) // ? returns -1
console.log(binarySearch(12, 0, 5, myArray)) // ? returns 4


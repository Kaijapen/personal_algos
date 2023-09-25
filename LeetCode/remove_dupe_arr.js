/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if (i + 1 != nums.length){
            while(nums[i] == nums[i + 1]){
                nums.splice(i + 1, 1);
            }
        }
    }
    return nums.length
};
let arr = [1, 1, 1, 2, 4, 5, 7, 7]
console.log(removeDuplicates(arr));
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let tracker = {}
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in tracker) {
            return true;
        }
        tracker[nums[i]] = 1;
    }
    return false
};
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
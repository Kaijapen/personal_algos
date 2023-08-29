/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == val) {
            nums[i] = null;

        } else {
            count++;
        }
    }
    console.log(nums);
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] == null) {
            let temp = nums[i+1];
            nums[i+1] = nums[i];
            nums[i] = temp;
        }
    }
    console.log(nums)
    return count;
};
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
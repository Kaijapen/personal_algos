/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }

    console.log(nums);
};

rotate([1,2,3,4,5,6,7], 3)



// oldNums = []
    // let count = nums.length - k;
    // for (let i = 0; i < nums.length-k; i++) {
    //     oldNums.push(nums[i]);
    //     if(count < nums.length){
    //         nums[i] = nums[count];
    //         count++;
    //     } else {
    //         break;
    //     }
    // }
    // count = 0
    // for(let i = k; i < nums.length; i++){
    //     nums[i] = oldNums[count]
    //     count++;
    // }
    // console.log("old nums:", oldNums)
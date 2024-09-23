var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = []
    let largestArrLen = 0
    let smallestArrLen = 0
    let largestArr = []
    let smallestArr = []
    if (nums1.length >= nums2.length) {
        largestArrLen = nums1.length
        largestArr = nums1
        smallestArrLen = nums2.length
        smallestArr = nums2
    }
    else{
        largestArrLen = nums2.length
        largestArr = nums2
        smallestArrLen = nums1.length
        smallestArr = nums2
    }
        
    for (let i = 0; i < largestArrLen; i++) {
        for (let j = 0; j < smallestArrLen; j++) {
            if (largestArr[i] < smallestArr[j]) {
                nums3.push(nums1[i])
                break
            } else {
                if(nums3.length > 1) {
                    if (nums3[nums3.length - 1] < smallestArr[j]) nums3.push(smallestArr[j])
                } else {
                    nums3.push(smallestArr[j])
                }
            }
        }
    }
    return nums3
};

let testarr1 = [5,8,9]
let testarr2 = [1,3,7]

console.log(findMedianSortedArrays(testarr1, testarr2))
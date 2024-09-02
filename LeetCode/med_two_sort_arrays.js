var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = []
    let largestArrLen = 0
    let smallestArrLen = 0
    if (nums1.length > nums2.length) {
        largestArrLen = nums1.length
        smallestArrLen = nums2.length
    }
    else{
        largestArrLen = nums2.length
        smallestArrLen = nums1.length
    }
        
    for (let i = 0; i < largestArrLen; i++) {
        for (let j = 0; j < smallestArrLen; j++) {
            if (nums1[i] < nums2[j]) {
                nums3.push(nums1[i])
            } else {
                nums3.push(nums2[j])
            }
        }
    }
    return nums3
};

let testarr1 = [1,3,5]
let testarr2 = [2,4]

console.log(findMedianSortedArrays(testarr1, testarr2))
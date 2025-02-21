/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
var findDifference = function(nums1, nums2) {
    const result = [];
    const nums1NotPresentinNum2 = [];
    const num2NotPresentinNum1 = [];
    for (let i=0;i<nums1.length;i++){
        let isExist = false;
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                isExist = true
            }
        }
        if(!isExist){
            nums1NotPresentinNum2.push(nums1[i])
        }
    }
    for (let i=0;i<nums2.length;i++){
        let isExist = false;
        for(let j=0;j<nums1.length;j++){
            if(nums2[i]==nums1[j]){
                isExist = true
            }
        }
        if(!isExist){
            num2NotPresentinNum1.push(nums2[i])
        }
    }
    const ar1 = removeDuplicates(nums1NotPresentinNum2);
    const ar2 = removeDuplicates(num2NotPresentinNum1);
    result.push(ar1);
    result.push(ar2)
    return result;
    
};
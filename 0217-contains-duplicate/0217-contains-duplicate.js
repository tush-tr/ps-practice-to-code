/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dic = {}
    for(let i = 0;i<nums.length;i++){
        if(nums[i] in dic){
            return true
        }else{
            dic[nums[i]] = 0;
        }
    }
    return false
};
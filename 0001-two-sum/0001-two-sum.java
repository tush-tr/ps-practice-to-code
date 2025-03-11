class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> mymap = new HashMap<>();
        for(int i=0; i<nums.length; i++){
            int cm = target - nums[i];
            if(mymap.containsKey(cm)){
                return new int[] {mymap.get(cm), i};
            }
            mymap.put(nums[i],i);
        }
        return new int[] {};
    }
}
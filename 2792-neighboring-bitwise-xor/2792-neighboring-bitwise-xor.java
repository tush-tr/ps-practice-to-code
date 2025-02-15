class Solution {
    public boolean doesValidArrayExist(int[] derived) {
        int isDerived = 0;
        for(int i=0;i<derived.length;i++){
            isDerived ^= derived[i];
        }
        if(isDerived == 0){
            return true;
        }
        return false;
        
    }
}
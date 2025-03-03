class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase();
        String cleanedStr = s.replaceAll("[^a-zA-Z0-9]", "");
        int a = 0;
        int b = cleanedStr.length()-1;
        while(a<b){
            if(cleanedStr.charAt(a) != cleanedStr.charAt(b))
            {
                return false;
            }
            a++;
            b--;
        }
        return true;
    }
}
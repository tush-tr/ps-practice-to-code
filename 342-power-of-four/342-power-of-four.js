/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n<1){
        return false;
    }
    if(n%4==0){
        return isPowerOfFour(n/4);
    }
    return n==1;
};
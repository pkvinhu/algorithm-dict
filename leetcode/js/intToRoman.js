// INTEGER TO ROMAN NUMERAL CONVERSION

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

var intToRoman = function(num) {
    let cR = '';
    while(num){
        if(num >= 1000){
          cR += 'M';
          num -= 1000;
        } else if (num >= 900) {
            cR += 'CM';
            num -= 900;
        } else if(num >= 500) {
            cR += 'D';
            num -= 500;
        } else if(num >= 400) {
            cR += 'CD';
            num -= 400;
        } else if (num >= 100){
            cR += 'C';
            num -= 100;
        } else if(num >= 90){
            cR += 'XC';
            num -= 90;
        } else if(num >= 50){
            cR += 'L';
            num -= 50;
        } else if(num >= 40){
            cR += 'XL';
            num -= 40;
        } else if(num >= 10) {
            cR+='X';
            num-=10;
        } else if(num ===9){
            cR+='IX';
            num-=9;
        } else if(num >= 5){
            cR+='V';
            num-=5;
        } else if(num ===4){
            cR+='IV';
            num-=4;
        } else {
            cR+='I';
            num-=1;
        }
    }
    return cR;
};

const test1 = intToRoman(3)
const test2 = intToRoman(4)
const test3 = intToRoman(9)
const test4 = intToRoman(58)
const test5 = intToRoman(1994)

console.log(test5)


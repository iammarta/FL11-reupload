function reverseNumber(num){
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
         }
         reverseNumber(-123);
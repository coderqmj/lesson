var reverse=function(x) {
  // console.log(x);
  var rev = 0;
  while (x != 0) {
      var pop = x % 10;
      console.log(x);
      x/=10
      parseInt(x)
      // Math.floor(())

      
      // if (rev > INT_MAX/10 || (rev == INT_MAX / 10 && pop > 7)) return 0;
      // if (rev < INT_MIN/10 || (rev == INT_MIN / 10 && pop < -8)) return 0;
      rev = rev * 10 + pop;
  }
  // return rev;
  console.log(rev);
}
// var x = 123
// console.log(reverse(x));
reverse(123)
var x =123
x=x/10
console.log(Math.floor(x));
console.log(Math.floor(3/2));
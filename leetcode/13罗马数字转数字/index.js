/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  s.split('');
  var length = s.length
  var number = 0

  for(var i =0;i<length;i++){
    if(s[i]=='I'){
      number +=1
    }
    if(s[i]=='V'){
      number +=5
    }
    if(s[i]=='X'){
      number +=10
    }
    if(s[i]=='L'){
      number +=50
    }
    if(s[i]=='C'){
      number +=100
    }
    if(s[i]=='D'){
      number +=500
    }
    if(s[i]=='M'){
      number +=1000
    }
  }

  let IV = s.split('IV').length - 1
  let IX = s.split('IX').length - 1
  let XL = s.split('XL').length - 1
  let XC = s.split('XC').length - 1
  let CD = s.split('CD').length - 1
  let CM = s.split('CM').length - 1
  if(IV){number -=2*IV}
  if(IX){number -=2*IX}
  if(XL){number -=20*XL}
  if(XC){number -=20*XC}
  if(CD){number -=200*CD}
  if(CM){number -=200*CM}


  // console.log(CM);
  return number

};
var s = "MCMXCIV"

console.log(romanToInt(s));

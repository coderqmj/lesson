/**
 * 
 */
var valid = function(s){
  var stack = []
  length = s.length;
  if (length==0) return true
  for(i=0; i<length;i++){
    if(s[i]=='(' || s[i]=='{' || s[i]=='['){
      stack.push(s[i])
    }else{
      if(stack[stack.length-1]=='('&& s[i] ==')' ) stack.pop()
      else if(stack[stack.length-1]=='['&& s[i] ==']' ) stack.pop()
      else if(stack[stack.length-1]=='{'&& s[i] =='}' ) stack.pop()
      else return false
    }
  }
  return stack.length == 0 
}


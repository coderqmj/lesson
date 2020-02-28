/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  length = height.length
  var number = 0
  if(length<2) return
  for(var i =0;i<length;i++){
    for(var k =i+1;k<length;k++){
      var w=k-i;
      var h=height[i];
      if(height[i]>height[k]){h=height[k]}
      if(number<w*h){number =w*h}
    }
  }

  return number
};
var height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));
var removeDuplicates = function(nums) {
  return Array.from(new Set(nums)).length
};
var nums = [1,1,2]
console.log(removeDuplicates(nums));
console.log(nums);
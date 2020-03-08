/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   var ans = []
//   for(var i =0;i<nums.length;i++){
//     for(var j=i+1;j<nums.length;j++){
//       if(nums[i]+nums[j]==target){
//         ans.push(i)
//         ans.push(j)
//         return ans
//       }
//     }
//   }
//   return 0
// };
var twoSum = function(nums,target){
  let targetMap = new Map()
  for(let i =0;i<nums.length;i++){
    const key = target - nums[i];
    if(targetMap.has(key)){
      return [targetMap.get(key),i]
    }
    targetMap.set(nums[i],i)
  }
}

var nums = [2, 11, 7, 15]
var target = 9
console.log(twoSum(nums,target));
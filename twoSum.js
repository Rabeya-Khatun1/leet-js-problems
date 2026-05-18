// --------------------------------------------------Problem 1. Two Sum-----------------------------------------------------------------

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



// function twoSum(nums, target) {
//   const map = {}; 
//   // এখানে আমরা একটা object (hashmap) বানাচ্ছি
//   // এটা number -> index store করবে
//   // যেমন: {2:0, 7:1}

//   for (let i = 0; i < nums.length; i++) {
//     // array এর প্রতিটা element ঘুরে দেখছি

//     const complement = target - nums[i];
//     // আমরা যে number টা চাই:
//     // current number + complement = target
//     // তাই complement = target - current number

//     if (map[complement] !== undefined) {
//       // check করছি: এই complement কি আগে array তে ছিল?
//       // যদি map এ থাকে, মানে আমরা আগে এই number দেখেছি

//       return [map[complement], i];
//       // map[complement] = আগের index
//       // i = current index
//       // এই দুইটা index return করি
//     }

//     map[nums[i]] = i;
//     // যদি complement না পাই,
//     // তাহলে current number টা map এ রেখে দেই future এর জন্য
//     // যেন পরে কেউ এটা complement হিসেবে use করতে পারে
//   }
// }


function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    console.log("i =", i);
    console.log("nums[i] =", nums[i]);

    const complement = target - nums[i];
    console.log("complement =", complement);
    console.log("map =", map);

    if (map[complement] !== undefined) {
      console.log("FOUND!");
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
}

nums = [2, 7]
target = 9
console.log(twoSum(nums, target)); 
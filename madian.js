// 4. Median of Two Sorted Arrays
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106


// var findMedianSortedArrays = function(nums1, nums2) {
//     if(nums1.length > nums2.length){
//         return findMedianSortedArrays(nums2, nums1)
//     }
//     let m = nums1.length;
//     let n = nums2.length;
//     let left = 0; let right = m;
//     while(left <= right){
//         let cut1 = Math.floor((left + right)/2)
//         let cut2 = Math.floor(((m+n+1)/2)-cut1)
        
//         let l1= (cut1 === 0) ? -Infinity : nums1[cut1-1]
//         let r1 = (cut1 ===n) ? Infinity : nums1[cut1]

//         let l2 = (cut2 === 0)? -Infinity : nums2[cut2-1];
//         let r2 = (cut2===n) ? Infinity : nums2[cut2]
//         if(l1 <=r2 && l2<=r1){
//             if((m+n)%2 ===0){
//                 return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
//             } else {
//                 return Math.max(l1, l2)
//             }
//         } else if(l1 > r2){
//            return right = cut1-1;
//         } else{
//            return left = cut1+1
//         }
//     }
// };
// var findMadianSortedArrays = function(nums1 ,nums2){
//     if(nums1.length > num2.length){
//         return findMadianSortedArrays(nums2, nums1)
//     }

//     let m = nums1.length;
//     let n = nums2.length;
//     let left = 0; let right = m;
//     while(left <= right){
//         let cut1 = Math.floor((left + right)/2);
//         let cut2 = Math.floor(((m+n+1)/2)-cut1)

//         let l1 = (cut1 === 0)? -Infinity : nums1[cut1-1];
//         let r1 = (cut1===n) ?Infinity : nums1[cut1];

//         let l2 = (cut2 === 0) ? -Infinity : nums2[cut2-1];
//         let r2 = (cut2 === n) ? Infinity : nums2[cut2]

//         if(l1<=r2 && l2 <= r1){
//             if((m+n)%2 === 0){
//                 return (Math.max(l1, l2)+Math.min(r1, r2))/2;
//             } else{
//                 return Math.max(l1, l2)
//             }

//         } else if(l1 > r2){
//             return right = cut1 - 1;
//         } else{
//             return left = cut1 + 1;
//         }


//     }
// }

// let nums1 = [1,2]
// let nums2 = [3,4]
// console.log(findMedianSortedArrays(nums1, nums2))

var findMadianSortedArrays = function(nums1, nums2){
  if(nums1.length > nums2.length){
    return findMadianSortedArrays(nums2, nums1);
  }
let m = nums1.length;
let n = nums2.length;
let left = 0; let right = m;
while(left<=right){
    let cut1 = Math.floor((left+right)/2)
    let cut2 = Math.floor((m+n+1)/2-cut1)

    let l1 = (cut1=== 0) ? -Infinity :nums1[cut1-1];
    let r1 = (cut1 === n)? Infinity: nums1[cut1];

    let l2 = (cut2 === 0) ? -Infinity : nums2[cut2-1];
    let r2 = (cut2===n)? Infinity: nums2[cut2];
    if(l1<=r2 && l2 <=r1){
        if((m+n)%2 === 0){
            return (Math.max(l1, l2) + Math.min(r1, r2))/2;

        } else {
            return Math.max(l1, l2)
        }
    } else if(l1 > r2){
        return right = cut1 -1;

    } else {
        return left = cut1 + 1;
    }
}

}
/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 

Constraints:

1 <= k <= 100
1 <= prices.length <= 1000
0 <= prices[i] <= 1000
*/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length;
    let sell = Array(k+1).fill(0);
    let buy = Array(k+1).fill(-Infinity);
    for (let price of prices) {
        for (let i=k; i>0; i--) {
            sell[i] = Math.max(sell[i], buy[i] + price);
            buy[i] = Math.max(buy[i], sell[i-1] - price);
        }
    }
    return sell[k];
};

// console.log(maxProfit(2, [2, 4, 1])); // 2
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3])); // 7
console.log(maxProfit(5, [1, 2, 3, 4, 5, 6, 7])); // 6

// 2, 4, 1, k=2
// sell 0 hold -inf
// 2 => sell 0, hold -2
// 4 => sell 2, hold -2
// 1 => sell 2, hold 1
// return 2

// 3, 2, 6, 5, 0, 3 k=2
// sell = 0 0 0, hold = -inf -inf -inf
// p=3
//  k=2
//   sell = 0 0 0, hold = -inf -inf -3
//  k=1
//   sell = 0 0 0, hold = -inf -3 -3
// p=2
//  k=2
//   sell = 0 0 0, hold = -inf -3 -2
//  k=1
//   sell = 0 0 0, hold = -inf -2 -2
// p=6
//  k=2
//   sell = 0 0 4, hold = -inf -2 -2
//  k=1
//   sell = 0 4 4, hold = -inf -2 -2
// p=5
//  k=2
//   sell = 0 4 4, hold = -inf -2 -1
//  k=1
//   sell = 0 4 4, hold = -inf -2 -1
// p=0
//  k=2
//   sell = 0 4 4, hold = -inf -2 4
//  k=1
//   sell = 0 4 4, hold = -inf 4 4
// p=3
//  k=2
//   sell = 0 4 7, hold = -inf 4 4
//  k=1
//   sell = 0 4 7, hold = -inf 4 4

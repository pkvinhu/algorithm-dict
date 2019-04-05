// BEST TIME TO BUY AND SELL STOCK

/*
Say you have an array for which the ith element is 
the price of a given stock on day i.

If you were only permitted to complete at most one transaction 
(i.e., buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:
    Input: [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and 
                 sell on day 5 (price = 6), profit = 6-1 = 5.
                 Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:
    Input: [7,6,4,3,1]
    Output: 0
    Explanation: In this case, 
    no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
    // initiate lowest buying price as first in set
    // assuming that set is never empty
    // and initiate highest difference at zero if stock prices never drop
    let lowestBuyingPrice = prices[0];
    let highestDiff = 0;
    
    for(let i = 1; i < prices.length; i++){
        // loop through and store current lowest price
        // and find highest difference in nums after lowest price in range
        lowestBuyingPrice = Math.min(lowestBuyingPrice, prices[i])
        highestDiff = Math.max(highestDiff, prices[i] - lowestBuyingPrice)
    }
    return highestDiff;
};

const testPrices = [7,1,5,3,6,4];
const result = maxProfit(testPrices);

console.log(result);
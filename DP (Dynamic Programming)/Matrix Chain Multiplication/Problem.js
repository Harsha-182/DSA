function matrixChainMemoized(arr, i, j, dp) {
    if (i === j) return 0; // Only one matrix, no multiplication needed
    if (dp[i][j] !== -1) return dp[i][j]; // Return if already computed

    let minCost = Infinity;
    
    for (let k = i; k < j; k++) {
        let cost = matrixChainMemoized(arr, i, k, dp) +
                   matrixChainMemoized(arr, k + 1, j, dp) +
                   arr[i - 1] * arr[k] * arr[j];

        minCost = Math.min(minCost, cost);
    }
    
    return dp[i][j] = minCost;
}

// Wrapper function
function matrixChainOrder(arr) {
    let n = arr.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(-1));
    return matrixChainMemoized(arr, 1, n - 1, dp);
}

// Example usage:
let arr = [40, 20, 30, 10, 30];
console.log(matrixChainOrder(arr));

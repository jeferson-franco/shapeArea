function solution(n) {
    return n * n + (n - 1) * (n - 1);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test shapeArea

// alternative solution
// function solution(n) {
//     return Math.pow(n, 2) + Math.pow(n - 1, 2);
// }

// alternative solution
// function solution(n) {
//    if (n === 1) return 1;
//    return solution(n - 1) + 4 * (n - 1);
// }

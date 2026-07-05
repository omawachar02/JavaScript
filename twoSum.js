let nums = [3, 2, 4, 6, 8];
let target = 9;
let result = [];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if ((nums[i] + nums[j]) === target) {
            result.push(i, j);
        }
    }
}
console.log(result);
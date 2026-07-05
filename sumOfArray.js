const pArr = [1, 2, 3, 4, 5];
console.log(pArr);

function sumOfArray(arr) {
    return arr.reduce((prev, curr) => {
        return prev + curr;
    });
}

console.log(sumOfArray(pArr));

let arr = [1, 2, 2, 3, 4, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);

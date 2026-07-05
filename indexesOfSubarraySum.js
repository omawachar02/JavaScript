let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 15;
let result = [-1];

for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        arr.unshift(undefined);
    }
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            result = [i, j];
        }
    }
}
console.log(result);
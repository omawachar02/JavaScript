const pArr = [10, 20, 30, 40];
console.log(pArr);

function Average(arr) {
    let sum = arr.reduce((prev, curr) => { return prev + curr });
    return (sum / arr.length);
}

console.log(Average(pArr));

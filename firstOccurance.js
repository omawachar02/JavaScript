let arr = [5, 1, 2, 3, 2, 1, 4];
console.log(arr);
let output = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            output.push(arr[i], arr[j]);
        }
    }
}
console.log(output);

let result = arr.filter((item) => !output.includes(item));
console.log(result);


let arr2 = [1, 2, 3, 4, 4, 1];
let x = 4;
let output2 = -1;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === x) {
        output2 = i;
        break;
    }
}
console.log(output2);
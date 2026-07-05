const pArr = [1, 2, 3, 4, 5];
console.log(pArr);

function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(pArr));



const dArr = [0, 2, 4, 6, 8];
console.log(dArr);

let reverse = pArr.reverse();
console.log(reverse);



let arr = [1, 4, 3, 2, 6, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed);

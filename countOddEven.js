const pArr = [1, 2, 3, 4, 5, 6];
console.log(pArr);
console.log(pArr.length)

let countEven = 0;
let countOdd = 0;

function evenOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            countEven++;
        }
        else {
            countOdd++;
        }
    }
    console.log(`even : ${countEven}`);
    console.log(`odd : ${countOdd}`);
}

evenOdd(pArr);
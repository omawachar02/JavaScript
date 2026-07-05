const smallest = [10, 5, 20, 8, 15];
console.log(smallest);

function findSmallest(arr) {
    return arr.reduce((number, small) => {
        if (number > small) {
            return small;
        }
        else {
            return number
        }
    });
}
console.log(findSmallest(smallest));

let arr = [10, 5, 20, 8, 15, 12, 20, 2];

let small = arr[0];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < small) {
            small = arr[i];
        }
    }
}
console.log(small);


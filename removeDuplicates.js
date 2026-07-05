const pArr = [1, 2, 2, 3, 4, 4, 5];
console.log(pArr);

// uniqueArray = [...new Set(pArr)];
// console.log(uniqueArray);

function removeDuplicate(arr) {
    let result = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
    return result;

}
console.log(removeDuplicate(pArr));

let arr = [1, 6, 5, 4, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            arr.splice(j, 1);
        }
    }
}
console.log(arr);


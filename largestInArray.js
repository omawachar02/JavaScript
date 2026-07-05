console.log("hello bhai log");

let val = [2, 3, 5, 7, 9, 1, 3, 4, 12, 10, 2];
console.log(val);

function checkLargest(arr) {
    return arr.reduce((maximum, number) => {
        if (maximum > number) {
            return maximum
        }
        else {
            return number
        }
    });
}
console.log(checkLargest(val));

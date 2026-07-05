let str1 = 'string';
let length = str1.slice(0, str1.length - 1);
console.log(length);

let str = 'Om Patil';
let result = '';

for (let i = 0; i < str.length - 1; i++) {
    if (i !== str.length - 1) {
        result += str[i];
    }
}
console.log(result);

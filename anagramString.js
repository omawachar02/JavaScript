let string1 = 'heart';
let string2 = 'earth';
let result = '';

for (let i = 0; i < string1.length; i++) {
    if (string2.includes(string1[i])) {
        result += string1[i];
    }
}

if (result == string1 && result.length == string2.length) {
    console.log('Given string is Anagram');
}
else {
    console.log('Given string is not Anagram');
}
console.log(result);
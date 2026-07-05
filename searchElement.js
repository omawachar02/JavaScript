let A = [2, 4, 6, 8, 10, 12];
let X = 6;
let N = A.length;

function searchElement(A, X, N) {
    let result;
    for (let i = 0; i < N; i++) {
        if (A.includes(X)) {
            result = 'Yes';
        }
        else {
            result = 'No';
        }
    }
    return result;
}

console.log(searchElement(A, X, N));
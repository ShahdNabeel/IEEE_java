//1
for (let i = 0; i <= 10; i += 2) console.log(i);

//2
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + '\t';
    }
    console.log(row);
}

//3
function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

var inputString = "Hello,    world!";
var cleanedString = removeSpaces(inputString);
console.log(cleanedString);

//4
function isDivisibleByTen(number) {
    return number % 10 === 0;
}

console.log(isDivisibleByTen(30));
console.log(isDivisibleByTen(17));

//5
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str.toLowerCase().charAt(i);
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Hello, World!'));
console.log(countVowels('This is a test'));
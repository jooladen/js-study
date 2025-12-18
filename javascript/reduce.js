//reduct sample
const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Sum of numbers:", sum); // Output: Sum of numbers: 15

// Using reduce to find the maximum number in the array
const max = numbers.reduce((accumulator, currentValue) => {
    return (currentValue > accumulator) ? currentValue : accumulator;
}, numbers[0]);

console.log("Maximum number:", max); // Output: Maximum number: 5

// Using reduce to group numbers by even and odd
const grouped = numbers.reduce((accumulator, currentValue) => {
    const key = (currentValue % 2 === 0) ? 'even' : 'odd';
    if (!accumulator[key]) {
        accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
}, {});

console.log("Grouped numbers:", grouped); 
// Output: Grouped numbers: { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }

// Using reduce to create a frequency map
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const frequencyMap = fruits.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = 0;
    }
    accumulator[currentValue]++;
    return accumulator;
}, {});

console.log("Frequency map:", frequencyMap); 
// Output: Frequency map: { apple: 3, banana: 2, orange: 2 }

// Using reduce to flatten an array of arrays
const nestedArrays = [[1, 2], [3, 4], [5]];

const flattened = nestedArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log("Flattened array:", flattened); // Output: Flattened array: [ 1, 2, 3, 4, 5 ]   
// 1.

var myArray = [1, 2, 3, 4, 5]
var sum = 0
for (let a = 0; a < myArray.length; a++) {

    sum += myArray[a]

}
console.log(`Sum of all the array elements is ${sum}`);

// 2.

var myArray = [1, 2, 3, 4, 5];
var reversedArray = [];

for (let i = myArray.length - 1; i >= 0; i--) {
  reversedArray.push(myArray[i]);
}

console.log(`Reversed Array: ${reversedArray}`);


// 3.

var b = parseInt(prompt("Enter a number"))
for (let i = 1; i <= 10 ; i++) {
    console.log(`${b} * ${i} = ${b*i}`);
    
}

// 4.

var array = [3, 7, 1, 9, 4];
var largest = array[0];

for (var i = 1; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log(`Largest Number : ${largest}`);

// 5.

var array1 = [3, 7, 1, 9, 4];
var smallest = array1[0];

for (var i = 1; i < array1.length; i++) {
  if (array1[i] < smallest) {
    smallest = array1[i];
  }
}

console.log(`Smallest Number : ${smallest}`);

// 1.

const list = ['Mobile','Laptop','Speaker','PC'];
const lastElement = list[list.length-1];
console.log(lastElement);

// 2.

var list1=[1,2,3,4]
if(list[0]==5)
{
    console.log('The First or Last index of an Array has value 5.');
}
else (list1[list1.length-1])
{
    console.log('The First or Last index of an Array does not have value 5.');
}

// 3.

console.log('Your Name :');
var names = ['=> Ahmed','=> Farhan', '=> Ali','=> Asad'];
console.log(names[1]);

// 4.

console.log('Add array element at specified index :');

var list2=['Mobile','Laptop','PC','Speaker'];
var num=2
var element= 'MP3'
list2.splice(num,0,element)
console.log(list2);

// 5.

console.log('Deleting an Array :');
var array = [1,2,3,4,5]
var indexToDelete = 1;
array.splice(indexToDelete,1);
console.log(array);
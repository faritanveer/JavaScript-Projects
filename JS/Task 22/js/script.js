// var person = {
//     Name : "Farhan",
//     Age : 18,
//     Course : "Python Programming"
// };
// console.log(person.Age);

// Task

function Person(name, age, registration_number, course, fav_programming_language, marks) {
    this.name = name,
        this.age = age,
        this.registration_number = registration_number,
        this.course = course,
        this.fav_programming_language = fav_programming_language
    this.marks = marks,
        this.show = function () {
            console.log(`Name is ${this.name}`);
            console.log(`Age is ${this.age}`);
            console.log(`Registration Number is ${this.registration_number}`);
            console.log(`Course is ${this.course}`);
            console.log(`Favourite Programming Languages are :  ${this.fav_programming_language}`);
            console.log(`Marks are : ${this.marks}`);
        }
}
var farhan = new Person("Farhan",
    18,
    1,
    "Python Programming", "\n => Python \n => JavaScript \n => TypeScript",
    "\n Computer : 98 \n Maths : 70 \n Urdu : 84 \n English : 99 \n Physics : 80")

farhan.show()


// 2.
///////////////////////////////////
console.log("Task no. 2 :");
///////////////////////////////////


var languages = [
    "=> Python", "=> JavaScript", "=> TypeScript"
]
console.log("First Favourite Programming Language: \n " + languages[0]);
console.log("Last Favourite Programming Language: \n " + languages[languages.length - 1]);

// 3.
///////////////////////////////////
console.log("Task no. 3 :");
///////////////////////////////////


var subjects = [
    " Computer : 98 ", "Maths : 70 ", "Urdu : 84 ", "English : 99", "Physics : 80"
]
console.log("Marks of any subject : \n " + subjects[2]);
console.log("Marks of another subject : \n " + subjects[0]);
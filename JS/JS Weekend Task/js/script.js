//Simple Basic Calculator


console.log("Choose an operation : \n -> Addition \n -> Subtraction \n -> Multiplication \n -> Division  ");

function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}

var x = parseFloat(prompt("Enter the First Number"))
var y = parseFloat(prompt("Enter the Second Number"))

var operation = parseFloat(prompt('Choose an Operation : \n 1. Addition \n 2. Subtraction \n 3. Multilication \n 4. Division'))

var result;
switch (operation) {
    case 1:
        result = add(x, y);
        break;
    case 2:
        result = sub(x, y);
        break;
    case 3:
        result = mul(x, y);
        break;
    case 4:
        result = div(x, y);
        break;

    default:
        console.log("Invalid");

}
console.log("Result: " + result);
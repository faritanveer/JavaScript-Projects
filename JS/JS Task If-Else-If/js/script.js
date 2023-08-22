console.log(" 1 : Burger \n 2 : Pizza \n 3 : Salad \n 4 : Pasta \n 5 : Drink");
var Select = parseFloat(prompt(" 1 : Burger \n 2 : Pizza \n 3 : Salad \n 4 : Pasta \n 5 : Drink"));

if (Select == 1) {
    console.log("Burger - $5.99");
    var userResponse = prompt("Place Order yes or no?");
    if (userResponse == 'yes') {console.log("Order Placed");
    }
    else if (userResponse == 'no') {
        console.log("Thanks for Coming :)");
    }
    else {console.log("Invalid input, Please type 'yes' or 'no' .");}
}
else if (Select == 2) {
    console.log("Pizza - $8.99");
    var userResponse = prompt("Place Order yes or no?");
    if (userResponse == 'yes') {console.log("Order Placed");
    }
    else if (userResponse == 'no') {
        console.log("Thanks for Coming :)");
    }
    else {console.log("Invalid input, Please type 'yes' or 'no' .");}
}
else if (Select == 3) {
    console.log("Salad - $4.49");
    var userResponse = prompt("Place Order yes or no?");
    if (userResponse == 'yes') {console.log("Order Placed");
    }
    else if (userResponse == 'no') {
        console.log("Thanks for Coming :)");
    }
    else {console.log("Invalid input, Please type 'yes' or 'no' .");}
}
else if (Select == 4) {
    console.log("Pasta - $7.79");
    var userResponse = prompt("Place Order yes or no?");
    if (userResponse == 'yes') {console.log("Order Placed");
    }
    else if (userResponse == 'no') {
        console.log("Thanks for Coming :)");
    }
    else {console.log("Invalid input, Please type 'yes' or 'no' .");}
}
else if (Select == 5) {
    console.log("Drink - $1.99");
    var userResponse = prompt("Place Order yes or no?");
    if (userResponse == 'yes') {console.log("Order Placed");
    }
    else if (userResponse == 'no') {
        console.log("Thanks for Coming :)");
    }
    else {console.log("Invalid input, Please type 'yes' or 'no' .");}
}
else {
    console.log("Not Available");
}



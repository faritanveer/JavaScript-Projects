// 1.
// var x=2
console.log(" 1 : Burger \n 2 : Pizza \n 3 : Salad \n 4 : Pasta \n 5 : Drink");
var Order = () => {
var Order = prompt(" 1 : Burger \n 2 : Pizza \n 3 : Salad \n 4 : Pasta \n 5 : Drink");
switch (Order) {
   case "1":
    {
        console.log("Burger - $5.99");
        break;
    }
    case "2":
        {
            console.log("Pizza - $8.99")
            break;
        }
        case "3":
            {
                console.log("Salad - $4.49");
                break;
            }
            case "4":
                {
                    console.log("Pasta - $7.79");
                    break;
                }
                case "5":
                    {
                        console.log("Drink - $1.99");
                        break;
                    }
                    default:
                        console.log("Not Available");
    }
}
Order();
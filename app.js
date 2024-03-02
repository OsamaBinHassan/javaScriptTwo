//chap 5
//Ques#1
var num1 = 3;
var num2 = 5;
var addNum = num1 + num2;
var subNum = num2 - num1;
var mulNum = num1 * num2;
var divNum = num1 / num2;
console.log(addNum);
console.log(subNum);
console.log(mulNum);
console.log(divNum);
//Ques#2
var value;
console.log("value after declaration is:",20);
value = 5;
console.log("initial value:", value);
console.log(value++,value)
console.log("by adding seven into value",value+7);
//Quest last
var eachTicket = 600;
var numbersOfTick = 5;
var totalExpenseOnFiveTickets = eachTicket * numbersOfTick;
console.log('Price of 5 tickets :',totalExpenseOnFiveTickets,'pkr');

var tableNumber = parseInt(prompt('Enter table number'));
var tableArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < tableArray.length; i++) {
    var table = tableNumber * tableArray[i];
    console.log(tableNumber + " * " + tableArray[i] + " = " + table);
}

// celcius into FarhenHeight

var celciusNumber = parseInt(prompt('enter the Celius'))

var f = (celciusNumber*9/5)+32;
console.log("FarhenHeight:" ,f) 
var FarhenHeightNumber = parseInt(prompt("enter farhenheight"))
var c = (FarhenHeightNumber-32)*5/9;
console.log("Celcius",c)
// Variables
var priceItem1 = 10; // Price of item 1
var priceItem2 = 20; // Price of item 2
var quantityItem1 = 3; // Ordered quantity of item 1
var quantityItem2 = 2; // Ordered quantity of item 2
var shippingCharges = 5; // Shipping charges

// Calculating total cost of each item
var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;

// Calculating total cost of all items
var subtotal = totalCostItem1 + totalCostItem2;

// Calculating total cost including shipping charges
var totalCost = subtotal + shippingCharges;

// Displaying results
console.log("Total cost of Item 1: $" + totalCostItem1);
console.log("Total cost of Item 2: $" + totalCostItem2);
console.log("Subtotal: $" + subtotal);
console.log("Shipping charges: $" + shippingCharges);
console.log("Total cost including shipping: $" + totalCost);

//marks percentage
var totalMarks = 100;
var obtMarks = 90;
var percentage = obtMarks*100/totalMarks;
console.log('Percentage is :',percentage);

//currency exchange
var usDollarsQuantity = 10;
var saudiRiyalQuantity = 25;

var oneDollar = 280;
var oneSaudiRiyal = 70;

var dollarsInPkr = usDollarsQuantity * oneDollar;
var riyalInPkr = saudiRiyalQuantity * oneSaudiRiyal;

var totalCurrencyExchangeInPkr = dollarsInPkr + riyalInPkr;
console.log('total Amount in PKR:', totalCurrencyExchangeInPkr);

//calculation in single statement

var randomNumberCalc = 78 + 5 * 10 / 2;
console.log("Random Number Calc:",randomNumberCalc);

//age calculation

var birthYear = 2000;
var curentYear = 2024;
var age = curentYear - birthYear;
console.log('age is :', age);

// Step 1: Store the radius into a variable
var radius = 5; // You can change this to any desired radius

// Step 2: Calculate the circumference
var circumference = 2 * Math.PI * radius;

// Step 3: Calculate the area
var area = Math.PI * radius * radius;

// Step 4: Output the results
console.log("The circumference is " + circumference.toFixed(2)); // toFixed(2) is used to round to 2 decimal places
console.log("The area is " + area.toFixed(2));

// Step 1: Store your favorite snack into a variable
var favoriteSnack = "chocolate bars";

// Step 2: Store your current age into a variable
var currentAge = 25;

// Step 3: Store a maximum age into a variable
var maximumAge = 80;

// Step 4: Store an estimated amount per day (as a number)
var amountPerDay = 2; // For example, you eat 2 chocolate bars per day

// Step 5: Calculate how many snacks you would eat total for the rest of your life
var yearsRemaining = maximumAge - currentAge;
var totalSnacksNeeded = yearsRemaining * 365 * amountPerDay;

// Step 6: Output the result to the screen
console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);


//arithematic game
var num = 10;
console.log('actual value of num is',num);

console.log('the value of ++num is:',++num);
console.log('now the value of num is:',num);
console.log('the value of num++ is:',num++);
console.log('the value of num is:',num);
console.log('the value of --num is:',--num);
console.log('the value of num is:',num);
console.log('the value of num-- is:',num--);
console.log('the value of num is:',num);


var a = 2, b = 1;

// Step 1: --a;
--a; // a becomes 1
console.log("a after --a:", a); // Output: 1

// Step 2: --a - --b;
var step2 = --a - --b; // a = 1, b = 0
console.log("a after --a - --b:", a); // Output: 1
console.log("b after --a - --b:", b); // Output: 0
console.log("result after --a - --b:", step2); // Output: 1

// Step 3: --a - --b + ++b;
var step3 = --a - --b + ++b; // a = 1, b = 1
console.log("a after --a - --b + ++b:", a); // Output: 1
console.log("b after --a - --b + ++b:", b); // Output: 1
console.log("result after --a - --b + ++b:", step3); // Output: 2

// Step 4: --a - --b + ++b + b--;
var step4 = --a - --b + ++b + b--; // a = 0, b = 0
console.log("a after --a - --b + ++b + b--:", a); // Output: 0
console.log("b after --a - --b + ++b + b--:", b); // Output: 0
console.log("result after --a - --b + ++b + b--:", step4); // Output: 1

// Final values
console.log("Final value of a:", a); // Output: 0
console.log("Final value of b:", b); // Output: 0
console.log("Final value of result:", step4); // Output: 1



function greetUser() {
    
    var name = prompt("What is your name?");
    
   
    if (name !== null && name !== "") {
      
      alert("Hello, " + name + "! Nice to meet you.");
    } else {
      
      alert("Hello there! Nice to meet you.");
    }
  }

  
  window.onload = greetUser;





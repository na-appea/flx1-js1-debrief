//1. GenBuzz

let myNumber = 18;

if (typeof myNumber !== "number") {
  console.log("This is not a number");
} else if (myNumber % 3 == 0 && myNumber % 5 == 0) {
  console.log("GenBuzz");
} else if (myNumber % 5 == 0) {
  console.log("'Buzz'");
} else if (myNumber % 3 == 0) {
  console.log("Gen");
} else {
  console.log(myNumber);
}

//2. E-Commerce Item list

let item;
switch (item) {
  case "shoes":
    console.log("Shoes are $50.");
    break;
  case "jeans":
    console.log("Jeans are $25.");
    break;
  case "hats":
    console.log("Hats are $12.");
    break;
  case "socks":
    console.log("Socks are $2.");
    break;
  default:
    console.log("Invalid Item");
}

//3. Print a random integer (whole number) between 50 and 100  to the console

console.log(Math.floor(Math.random() * (100 - 50)));

let productPrice = 1500;
let quantity = 2;

let bill = productPrice * quantity;
let finalbill = bill - 10/100 * bill;
let discountedBill = bill - finalbill

console.log("originalBill ->" , bill);
console.log("discounted amount ->" , discountedBill);
console.log("finalBill ->" , finalbill);

// let product1 = ["iphone" , 292943]

// let product2 = {
//     Prize : 29814,
//     avgRating : 4.5,
//     totalReview: 75,
//     Discount: 50,
//     productName: "iphone 18 pro max New",
//     printProductName : function() {
//         console.log(this.productName);
//     },
//     printDiscount(){
//         console.log(this.Discount);
//     }

// }

// console.log(Object.keys(product2)); 
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

// for( value of product1){
//     console.log(value);
// }

// for (let i = 0 ; i< product1.length;i++){
//     console.log(product1[i]);
// }

// product1.forEach(function(value,index){
//   console.log(value ,index);
// })

//call methods
// product2.printProductName()
// product2.printDiscount()

// console.log(product2.printProductName());
// console.log(product2.printDiscount());

// console.log(product[]);


// product1[0]

// console.log(product1[1]);

// product2.avgRating
// console.log(product2.totalReview);

// console.log(product2);


// For of

// for ( value of product1){
//     console.log(value);
// }   // For of for Array

//for in

// for ( value in product2) {
//     console.log(value);
// }  // for in for index/object

// for (value in product2) {
//     console.log(product2[value]); 
// }

//destructuring

// let Product1 = [242424, 4.5, 75, 20 ,"iphone"]
// const [a ,b, c ,d ,e] = [242424, 4.5, 75, 20 ,"iphone"]

// console.log(d);

let product2 = {
    Prize: 29814,
    avgRating: 4.5,
    totalReview: 75,
    Discount: 50,
    productName: "iphone 18 pro max New",
    printProductName: function () {
        console.log(this.productName);
    },
    printDiscount() {
        console.log(this.Discount);
    }

}
//for Object

// let {Prize, avgRating, totalReview} = product2

// console.log(Prize,avgRating,totalReview);

// for ( [key , value] of Object.entries(product2)){
//     console.log(key , value);

// }

// let Product1 = [242424, 4.5, 75, 20 ,"iphone"]

// const [name , price] = [242424, 4.5, 75, 20 ,"iphone"]

let arr = [23, 32, 632, 244, 62, 66, 26]

// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));

let a = [1, 2]
let b = [3, 4]

let c = [...a, ...b] // array merging by spread operator

// console.log(...c);


let Product1 = [242424, 4.5, 75, 20, "iphone"]

const [n, p, ...hello] = [242424, 4.5, 75, 20, "iphone"]

// console.log(hello);

function add(...numbers) {
   console.log(numbers);
}

console.log(add(4, 5, 35, 544, 4362));
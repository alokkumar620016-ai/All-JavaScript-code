"use strict"

// let name1 = "hello";
// console.log(name1);


// let student = {
//     name : "santosh",
//     printName : function () {
//         console.log("Hii," , this.name);
//     }
// }

// student.printName()

// let result = student.printName;

// result()

// let student2 = {
//     name : "pritam",
//     printName : student.printName
// }

// student2.printName()

var name = "something"
let product = {
    name : "Iphone",
    printName :  () =>  {
          console.log(this.name);
    }
}

product.printName()



// let product = {
//     name : "Iphone",
//     printName : function () {
//         const print = () => {
//             console.log(this.name);
//         }
//         print()
//     }
// }

// product.printName()


// let student = {
//     name : "Nishant",
//     printName: function () {
//         console.log("Hii," , this.name);
//     }

    
// }

// let result = student.printName;
// result()

// function fun1(callback) {
//     console.log("Hii");
//     callback()
// }

// function cb() {
//     console.log("This is callback function");
// }

// fun1(cb)

// let arr = ["a" , "b" , "c" , "d"]

// // arr.forEach()
// // arr.map()

// function a() {

//     function b() {

//     }

//     return b


// }



function searchPizza(cb1) {
    console.log("Pizza searching..");
    setTimeout(function () {
        console.log("Here is the pizza Menu");
        let price = 500;
        cb1(price)
    }, 2000)
}


function addToCart(cb2) {
    console.log("Pizza adding to cart");
    setTimeout(function () {
        console.log("Pizza added to cart");
        cb2()
    }, 3000)
}

function Payment(price, cb3) {
    console.log(`Payment Initiated , Amount : ${price}`);
    setTimeout(function () {
        console.log(`Payment Completed , Amount : ${price}`);
        cb3()
    }, 5000)
}


searchPizza(function (price) {
    addToCart(function () {
        Payment(price, function () {
            console.log("Bss aa hee gaya Pizza");
        })
    })
})










let div = document.querySelector("#Reveal-gift")
let h1 = document.querySelector("#gift")
let btn = document.querySelector("#btn")



function revealGift() {
    console.log(event);
    console.log(event.type);
    console.log("target", event.target);
    console.log("Current target", event.currentTarget);
    h1.classList.remove("hidden")
    h1.classList.add("visible")

}

// btn.addEventListener('click' , () => {
//     console.log("Hello mic check");
// })

// btn.addEventListener('click' , () => console.log("Hello mic check"))


div.addEventListener('click', revealGift)


// function fun1(e) {
//     console.log(e);
// }

// btn.addEventListener('click' , fun1  , {once: true}) 

// btn.addEventListener('click', (e) => {
//     console.log(e);
//     // console.log(e.key);
//     // console.log(e.clientX);
//     // console.log(e.clientY);
// })



// btn.removeEventListener('click' , fun1)

// let counter = 0

// function fun1(e) {
//     if (counter < 3) {
//         console.log(e);
//         counter++
//     } else {
//         btn.removeEventListener('click', fun1)
//     }
// }

// btn.addEventListener('click', fun1)


let outter = document.querySelector("#outter")
let inner = document.querySelector("#inner")
let btn2 = document.querySelector("#btn2")

outter.addEventListener('click' , (e) => {
    e.stopPropagation()
    console.log("outter");
} )

inner.addEventListener('click' , (e) => {
    e.stopPropagation()
    console.log("inner");
})

btn2.addEventListener('click' , (e) => {
    e.stopPropagation()
    console.log("btn2");
})


let originalPrices = [463, 654, 2346]

let discountedPrices = []

// for (value of originalPrices) {
//      discountedPrices.push(value * 0.9)  // 10% discount

// }

originalPrices.forEach((value) => {
    discountedPrices.push(value * 0.9) // 10% discount
})


// console.log(originalPrices);
// console.log(discountedPrices);

const discountedPrices2 = originalPrices.map((value) => {
    return value * 0.9
})

// console.log(discountedPrices2);

let student = [
    {
        name: "ayaan",
        marks: 56,
    },
    {
        name: "Mansi",
        marks: 46,
    },
    {
        name: "Rohan",
        marks: 33,
    },
    {
        name: "shivan",
        marks: 30,
    },
    {
        name: "santosh",
        marks: 28
    }

]  // Array of objects

// let studentNames = []

// student.forEach((value) => {
//     studentNames.push(value.name)
// })

// const studentNames = student.map((student) => {
//     return student.name
// })

const studentNames = student.map((student) => student.name)
const studentmarks = student.map((student) => student.marks)

// console.log(studentNames );
// console.log(studentmarks);

// let boostedMarks = student.map((student) => {
//     return {...student , marks : student.marks + 10}
// } )

let boostedMarks = student.map(student => ({ ...student, marks: student.marks + 10 }))


// console.log(boostedMarks);


// let failedStudents = []

// student.forEach((student) => {
//     if (student.marks < 33) {
//         failedStudents.push(student)
//     }
// })

const failedStudents = student.filter((student) => student.marks < 33)

// console.log(failedStudents);

let marks = [56, 24, 62, 73, 78]

// let totalMarks = 0

// marks.forEach((mark) => totalMarks = totalMarks +  mark)

// const totalMarks = marks.reduce((accumulator , currentValue) => {
//     return accumulator + currentValue

// } , 0)

// const totalMarks = marks.reduce((totalMarks , marks) => totalMarks + mark , 0)

const totalMarks = student.reduce((totalMarks, student) => totalMarks + student.marks, 0)


// console.log(totalMarks);

const attendence = ["present", "present", "absent", "present", "absent"]


// -> {present : 3 , absent : 2}

// let obj = {}

// attendence.forEach((value) => {

//     if (obj[value]) {
//         obj[value] = obj[value] + 1
//     }  else {
//         obj[value] = 1
//     }
// })

// console.log(obj);

const obj = attendence.reduce((acc, value) => {
    if (acc[value]) {
        acc[value] = acc[value] + 1
    } else {
        acc[value] = 1
            }
            return acc
    } , { })

    console.log(objf);


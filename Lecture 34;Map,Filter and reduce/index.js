let student = {
    name : "varad",
    rollNo : 34,
    subjects: ["math","english","hindi"], 
    totalMarks: 600
}


// let {name , rollNo , subjects}= student

// console.log(subjects);

// how to rename key
let{ subjects : vishay ,totalMarks = 500, ...variable } = student
//subject -> vishay 
// let vishay = subjects
// console.log(vishay);
// console.log(totalMarks);



// console.log(variable); 

// object merging using spread operator

let obj1 = {
    name : "nishant",
    phone : 233523436
}

// let india = "country"

let obj2 = {
    address : "india",
    adharCard : 357923789027
}

let obj3 = {...obj1 , ...obj2}

// console.log(obj3);

// array and object update

const arr = [1,2,3,4]

arr[1] = "updated" 
arr[2] = "New update"

// console.log(arr);


const obj = {
    name : "kashturi",
    rollno : 23,
    address : null
}

obj["name"] = "santosh"
obj.name = "kunal"

delete obj.rollno //property deleted -> this is for object

// console.log(obj);

// console.log(obj.address);

let arr1 = [ 1 ,2, 3 ,4 ,5 ,6]

// arr1.pop()
// arr1.splice(1 ,3) // delete

// arr1.splice(3,0 ,"hello") // add
// arr1.splice(3,1, "replace") // replace

// let trimArr = arr1.slice(0 , 3)

// console.log(trimArr);

// console.log(arr1.indexOf(3));

let res = arr1.find((value) => {
      return value === 3;
}) 

// console.log(res);

let resIndex = arr1.findIndex((value) => {
     return value === 3;
})
// console.log(resIndex);

//flat

let arr3 = [1 ,2 ,3 ,4 ,5 ,[6 ,7 ,8, [9 ,10 ,11]]]

// console.log(arr3.flat(Infinity));

// mutability

let arr4 = [4,36,74,44,85 ,36 , 74]

let arrCopy = arr4;

arrCopy.pop()

console.log("arr4",arr4);
console.log("arrCopy",arrCopy);


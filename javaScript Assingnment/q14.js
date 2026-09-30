let math = 29;
let science = 60;
let english = 70;

let totalMarks = math + science + english;
let Average = totalMarks /3;


if (math >= 40 && science >= 40 && english >= 40) {
    if (Average >= 75) {
     console.log("Pass with distinction" , "Average -->" ,Average);   
    }  
} else if (Average >= 60) {
    console.log("Pass with first division" , "Average" , Average);
} else if (Average >= 50) {
    console.log("Pass with Second division" , "Average" , Average);
} else  {
    console.log("Just Pass" , "Average" , Average);
} 


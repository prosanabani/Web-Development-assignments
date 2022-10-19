//  (1) write a program that calculates the factorial of a number

// function calculating_factorial(number){
//     let sum =1;
//     for (let index = number; index !=0; index--) {
        
//         sum =sum *number;
//         number--;

//     }
//     return sum;
// }
//     console.log(calculating_factorial(1))//try any number

// (2) Write a JavaScript program to round a number to a specified amount of digits.
// let number =prompt("write a decimal number ")

// let x = prompt("what digit you want to round in " +number);

//   //to fixed round the number to the parameter tofixed(parameter)

//     window.alert(parseFloat(number).toFixed(parseInt(x-1)));



//  (3) Write a JavaScript program to check if a string is lower case or no





// let x=[prompt("enter a string and we will tell wether it is a lowercase or not ")];

// let y =x.map(function(e){
    
//     return(e === e.toLowerCase() ? true :false )
      

// })
// console.log(y)



// (4) Write a JavaScript program to convert an given angle from degrees to radians.

//  one degree = 0.0174533redian



// let input_number = prompt("what is the number : ")
// let input_process = prompt("what degree you want to convert to '1'for degree '2'for radian :")
// let process= "";


// switch (parseInt(input_process)) {
    
//     case 1:
//         process = "degree";
//         converting(process,input_number)
//         break;
//     case 2:
//         process = "radian";
//         converting(process,input_number)
//         break;
//     default:
//         alert("please enter a either 1 or 2")
//         break;
// }
// function converting(process,number){
//     if(process == "degree"){
//         alert("in degree it is equal to " + number/0.0174533 );
//     }
//     else{
//         alert("in radian it is equal to " + number*0.0174533);
//     }
// }






//(5) Write a JavaScript program to get the current URL.

// console.log(document.URL)

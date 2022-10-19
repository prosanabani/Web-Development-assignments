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



// let x ="hi there s yAu know";
// let app=false;
// let y =x.split("").map(function(e){
    
//     (e === e.toLowerCase ? app=true : app=false )
//     return app;  

// })
// console.log(y)



// (4) Write a JavaScript program to convert an given angle from degrees to radians.

//  one degree = 0.0174533redian


    
    case 1:
        process = "degree";
        converting(process,input_number)
        break;
    case 2:
        process = "radian";
        converting(process,input_number)
        break;
    default:
        alert("please enter a either 1 or 2")
        break;
}
function converting(process,number){
    if(process == "degree"){
        alert("in degree it is equal to " + number/0.0174533 );
    }
    else{
        alert("in radian it is equal to " + number*0.0174533);
    }
}












//(5) Write a JavaScript program to get the current URL.

// console.log(document.URL)

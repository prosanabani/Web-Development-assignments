//  (1) write a program that calculates the factorial of a number
function calculating_factorial(number){
    let sum =1;
    for (let index = number; index !=0; index--) {
        
        sum =sum *number;
        number--;

    }
    return sum;
}
    console.log(calculating_factorial(4))

// write a program that calulattes the sum of an integer array 

// (1) write a javascript program that convert a lenght of a given string into bytes

// const byte_Size = str => new Blob([str]).size;
// console.log(byte_Size('123456')*2);  
// console.log(byte_Size('Hello World')*2);  
// console.log(byte_Size('Ã¢')*2); 
//  note: 1 character = 2 bytes

// (2) write a javascript program that converts a comma seperate  value(CSV) to a one dimention array  

// method(1)

// let x = "hi,ali";
// let word =[];
// let wordee ="";

// for (let index = 0; index < x.length; index++)//for passing through the string letter by letter
//  {
//     if (x.charAt(index)==',')
//         {
//             let commaPlace = index;
          
//             for (let i = 0; i < commaPlace; i++) 
//             {
//                 let current = 0;
//                 word[i]=x.substring(current,commaPlace);   
//             }
//              console.log 
//         }
//     else
//         console.log("there is no comma in index " + index)    
    
    
    
// }


// enchanced method(1)



// let x= prompt("enter any CSV word");
// // let x ="hi,al,alid,iuyf";
// let word =[];
// let comma=[];



// for (let index = 0; index < x.length; index++)//for passing through the string letter by letter
// {
//     if (x.charAt(index)==',')   //checking weather the word has comma or not
//     {   
//         var commaPlace = index;
//         comma.push(commaPlace)
//         }   
// }
//     console.log(comma)
//     // console.log(comma)
//     let convertedComma=comma.map(Number)  //converting comma array "strings values"into integers  
//     let current=0;

//     for (let i = 0; i < convertedComma.length; i++) //for cutting the word 
//     {
//         let place=comma[i];
//         word[i]=x.substring(current, place)
//         current= convertedComma[i] + 1;
//         if(comma[i+1] == comma[comma.lenght-1] ) //substringing the last part after the last comma
//         {
//                 word[i+1]=x.substring(current, x.length )
//         }
       
//     }
//     console.log(word)  
//     for (let i = 0; i < word.length; i++) //for previewing the array elements
//      {
//         let y=i+1

//         console.log("element number "+ y + " "+word[i])
        
//     }


 


// (3)Write a JavaScript program to extract out the values at the specified indexes from a specified array.
    // let displayedWord="hello there how are you";
    // let word=[];

    // for (let index = 0; index < displayedWord.length; index++) //pushing word letters into an array 
    // {
    //     word[index]=displayedWord.charAt(index);
    // }
    // let valueAtIndex =prompt("Enter an index to get its value : " + displayedWord)


    // if (valueAtIndex > displayedWord.length ) {
    //     console.log("the given value is too high")
        
    // }
    // else{
    //     for (let i = 0; i = valueAtIndex; i++) //outputing the value
    //       {
    //     console.log("The index "+valueAtIndex + " have value of " + word[i])
    //       }
    // }
    
// (4)Write a JavaScript program that return true if the given value is a number,false otherwise.

    // let x = prompt("enter a number to check weather it is a number or no");
    // let y = parseInt(x);
    // if ( isNaN(y) ) {
    //     console.log("false")
    // }
    // else
    //     console.log("true")

//(5)Write a JavaScript program to convert a string to snake case.

// let x= prompt("enter any sentence");
// // let x ="hi ali ali hi";
// let word =[];
// var space =[];


// let y =x.split("").map(function(e){

// return  (e == ' ' ?  "_" : e )

// }).join('')

// console.log(y)







        


// //if statement
// if (true) {
//     console.log('Hello');
// }


// //if else statement
// if (true) {
//     console.log('Hello');
// }
// else {
//     console.log('Goodbye');
// }


// //nested if statement
// //if...else if ......else if .......else
// if (true) {
//     console.log('Hello');
// }
// else if (true) {
//     console.log('Goodbye');
// }
// else if (true) {
//     console.log('Goodbye');
// }
// else {
//     console.log('Goodbye');
// }
// if (true) {
//     if (false) {
//         console.log('Hello');
//     }
//     else {
//         console.log('Goodbye');
//     }
// }
const masterPassword = "abc123";
let password ="abc"
let errorMessege;


const input=document.getElementById("password");
input.addEventListener("keyup",function(e){
    const value=e.target.value;
    if (value.length < 5) {
        error.style.color="orange"
        errorMessege = "Password is too short";
        error.innerText=errorMessege

    }else if(value ===masterPassword){
        
        error.style.color="green"
    error.innerText="Password is correct🎉"
    errorMessege = "null";
       
    }else {
         error.style.color="red"
        errorMessege= "incorrect password"
        error.innerText=errorMessege
    
 
    
} 

});


// console.log(e.target.value);
//switch statement
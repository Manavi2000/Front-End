// console.log(10+"20"); // concat
// console.log(9-"5"); // 4 bug 
// console.log("Java"+"Script");
// console.log(" "+" ");
// console.log(" "+0);
// console.log("vinod"-"thapa"); // NAN 
// console.log(true+true); // true: 1 false :0 
// console.log(true+false);
// console.log(false+false);
// console.log(false-true)

// const myNumber=912345678
// const myname = "Manavi Yadav"
// console.log(isNaN(myNumber));
// console.log(isNaN(myname));

// console.log(NaN === NaN); //  false ; NaN that mean value is not assigned ; yeh global variable hai
// //isko koi value assigned nhi hai 
// console.log(Number.NaN === NaN); //false
// console.log(isNaN(NaN)); //true
// console.log(isNaN(Number.NaN)); // true
// console.log(Number.isNaN(NaN));

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);

// console.log(3**3);
// // var a=20;
// // var b=10;
// // var c =a;
// // a=b;
// // b=c;
// // console.log(a+" "+b);


// var a=20;
// var b=10;
// a= a+b;
// b= a-b;
// a= a-b;
// console.log(a+" "+b);

// var num1 =5;
// var num2 = '5';
// console.log(num1==num2); // true just check the value not the type of the variable 
// console.log(num1 === num2); // false // first check the type then the vslue of variable.


// // leap year program 

// var leapYear = 2002;
// if(leapYear%4===0){
//     if(leapYear%100 === 0 ){
//         if(leapYear%400 === 0){
//             console.log("This year"+leapYear+" is a leap year");
//         }
//     }
//     else{
//         console.log("This year "+ leapYear + " is not a leap year");
//     }
// }else{
//     console.log("This year "+ leapYear + " is not a leap year");
// }


// for ( var i=1 ; i<11 ; i++){
//     console.log(i*8);
// }

//Function parameter : listed in function definition.
// Function arguments are the real values passed to the function.

// Function expression : defining the function as the variable 
//Or assigning the function in variable.
// anonymous function : when we define the function and assigned it to a variable

var funExp = function(a,b){
    return a+b;

}

//template literal 
var sum = funExp(10,20);
console.log(sum);
var value1="This is output";
var value2="This is new output";
console.log(`${value1} and ${value2}`)

//Default parameters 

var fun =function  mult(a,b=5){
    return (a*b);
}
console.log(fun(10));

//Destructing in ES6 :


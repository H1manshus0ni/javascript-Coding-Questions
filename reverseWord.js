// var str="raam raam raam raam raam krishna krishna krishna krishna krishna";


// var saved = str.split(" ").map(function(word){

// return word.split("").reverse().join("")
// })

// console.log(saved.join(" "))


// q2. 

// how to check if the object is array or not ? provide some code 



// function checkArray (arg){
// return Array.isArray(arg);
// }

// console.log(checkArray([]))
// console.log(checkArray({}))

// q3. how to empty an array in javascript ?

// var arr=[1,2,3,4,5];

// console.log(arr.length)

// arr.length=0;

// console.log(arr.length)

// Q4. check if number is integrer or not 

// var number=12;

// console.log( Number.isInteger(number))
// .............................................................
//  x % 1==0 then its an integer else not ant integer 

// var a = 12;

// if(a%1===0){
//     console.log("integer")
// }
// else{
//     console.log("not integer")
// }

// Q5. duplicate this array [1,2,3,4,5] to [1,2,3,4,5,1,2,3,4,5]

// function duplicate(a){
// return a.concat(a);
// }


// var a =[1,2,3,4,5];
// console.log(duplicate(a))

// Q6 reverse the number : 

// let a=32347;

// function rev(a){
//    return Number(a.toString().split("").reverse().join("") ) ;
// }

// console.log(rev(a));

// function revesr(a){

//     var rev=0;
//     while(a>0){
//         var ld=a%10;

//         rev=rev*10+ld;

// a=Math.floor(a/10);
//     }

//     return rev;
// }

// console.log(revesr(a));

// Q 7. check if its palindrome or not 

// var str="maam"

// function palindromcheck(str){

//     return (str.split("").reverse().join(""))===str ;


// }

// console.log(palindromcheck(str));

// Q.8 write a code which passed a string with letters in alphabetical order 

// var str="apple"

// console.log(str.split("").sort().join(""))

// 9 Q. fucntion that accepts a string as a arameter and convert the first letter of each word in upper case . 

// var str="himanshu bhai kaise ho";

// function upper(str){

//     var x = str.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase()+word.substring(1)
//     })


//     console.log(x.join(" "))



// }

// upper(str)

// 10 Q . write a javascript function to get the number of occurrences of each letter on specified string 

// str="himanshusoni"


// function occ(str){
    
//     var occurrences={};


//     str.split("").forEach(element => {
        
//         if(occurrences.hasOwnProperty(element)===false){
//             occurrences[element]=1;
//         }
//         else{
//             occurrences[element]++;
//         }
    
        
//     });
//     return occurrences;
// }

// console.log(occ(str))

// Q11. sum of all elementsof array 

// var arr=[1,2,3,4,5,6,6]
// var sum=0;

// arr.forEach((elem)=>{
// sum=sum+elem;
// })

// console.log(sum)

// Q 12. in an array of number and strings 

// var arr=["hehehe", 12,13,45,"gff"]

// var sum=0;

// arr.forEach((elem)=>{
//     if(typeof(elem)==="number"){
//         sum=sum+elem;
//     }
// })

// console.log(sum);











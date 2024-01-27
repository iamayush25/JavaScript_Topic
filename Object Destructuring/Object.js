//   Object Destructuring 

let {a , b} = {a : 5 , b : 10}
console.log(a , b);

// Using spread Operator we can change array into an object


let arr = [2 , 3 , 5 , 7 , 9]
let obj = {...arr}              // ...arr spread Operator
console.log(obj);


// We can print all the object data 

const object = {
    name : "Ayush" , 
    age : 23 , 
    address : "ujjain"
}

console.log({...object});



// we can change the object values using keys after the object

const object2 = {
    name : "Ayush" , 
    age : 23 , 
    address : "ujjain"
}

console.log({...object2 , name : "Ashu"});  
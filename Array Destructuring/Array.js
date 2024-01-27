let array = [2 , 4 , 5 , 12 , 10]

// destructuring 

let [a , b  , ...arr] = array   // using  spread ( value of a is 2 and balue of b is 4 and all remaining values store in ...arr in array)
console.log(a , b , arr);


//_______________________________________________________________________________________________________

let array1 = [5 , 6 , 1 , 19 , 13 , 11 , 2 , 7]

let [x , y , , , ...newArr ] = array1     // if i want to skip some values like 1 and 19 so i can use Empty space and separate by Coma's ( , ) 

console.log(x , y , newArr);


// use array walues in function using spread operator 

let array2 = [5 , 6 , 1 , 10]

const SumOfArray = (value1 , value2 , value3 , value4) => {
    return value1 + value2 + value3 + value4
}

console.log("Total sum of array the is :- " , SumOfArray (...array2 ));


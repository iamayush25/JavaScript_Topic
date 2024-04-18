
function square() {
    let num = 5;
    let num1 = num * num;
    // let num1 = num * 2;
    console.log(num1);
}
square()



function addTwonumber() {
    let num = 10;
    let num1 = 20;
    let sum = num + num1;
    console.log(sum);
}
addTwonumber()


function my_name() {
    let name = 'Ayush' ;
    let surname = 'sharma' ;
    let fullname = name + ' ' + surname;
    console.log(fullname);
}
my_name()

function printFullName (){
    let firstName = 'Ayush'
    let lastName = 'Sharma'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName);
}
printFullName()

function addNum() {
    let numOne = 5 ;
    let numTwo = 10 ;
    let sum = numOne + numTwo ;
    return sum
}
console.log(addNum());
let add = addNum();
console.log(add);



function name(){
    console.log('my name is ayush');
};
name()



const anonymious = function(){
    console.log('hi');
};

anonymious()


const  arrow = (num)=>{
    console.log('hello');
    console.log(num*2);
}
arrow(34)



self invoking function 

(function(){
    console.log('My name is Ayush');
})
();

console.log('My name is Ashu');

// Maximum number using function..

function maxnum(){
    let array = [12 , 43 , 54, 11, 90, 76, 46 , 100] ;
    let max = array[0] ;
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
        
    }
    console.log(max) ;    
}
maxnum()

// second max 
function sec_max() {
    let array = [12 , 43 , 54, 11, 90, 76, 46 , 100] ;
    let first_max = array[0] ;
    let second_max = array[0] ; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] > first_max){
            second_max = first_max       // second max 
            first_max = array[i]
        }
        
    }console.log(second_max);
}
sec_max()

function oneSec_max() {
    let array = [12 , 43 , 54, 11, 90, 76, 46 , 100] ;
    let first_max = array[0] ;
    let second_max = array[0] ; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] > first_max){
            second_max = first_max       // second max 
            first_max = array[i]
        }
        else if (array[i] > second_max && array[i] < first_max){
            second_max = array[i]
        }
        
    }
    console.log('second_max', second_max);
    console.log('first_max' , first_max );
}

oneSec_max()


function oddEven() {
    let array = [1, 2, 4, 5, 3, 6, 8, 7, 9] ;
    let odd = [] ;
    let even = [] ;
    evenArray = 0;
    oddArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenArray += array[i]
            even.push(array[i])
        }
        else{
            oddArray += array[i]
            odd.push(array[i])
        }
        
    }
    console.log( even ,'Sum of this Array is =' , evenArray);
    console.log( odd , 'Sum of this Array is =' , oddArray);
}
oddEven()


const value = (callback)=>{
    console.log("total sum ");
    callback()
}

const data = ()=>{
    console.log("program is finish");
}

value(data)

// // Declaration function


function name() {
    return 5 * 5
}
console.log(name());
name()

// Self Invoking Functions

(function(){
    console.log (2 * 5)
})
()



// Anonymous Function

const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }
  anonymousFun()


// // Arrow function

const ayush = () =>{
    return 'Ashu Sharma'
}
let a = ayush()
console.log(a);


// //  Practice Exercise


const fullName = ()=>{
    return 'Ayush Sharma'
}
console.log(fullName());


---------------------------------------

const fullName = (firstName , lastName)=>{
    console.log(firstName + ' ' + lastName);
}
fullName('Ayush' , 'Sharma')

---------------------------------------

function addNum (a , b){
    let sum = a + b
    return sum
}
console.log(addNum(5 , 10));

-------------------------------------

function rc (length , width){
    let area = length * width
    console.log(area);
}
rc(10 , 12)

------------------------------------

const rectangle = (length , width)=>{
    let perimeter = (length + width) * 2
    console.log(perimeter);
}
rectangle(23 , 12)

------------------------------------

function ranctungler (length , width , height) {
    volume = length * width * height
    console.log(volume);
}
ranctungler(2 , 3 , 6)

-------------------------------------

(function(p , r){
    let area = p * r * r
    console.log(area);
})
(3.14 , 5)

-------------------------------------

(function (r){
    let circumOfCircle = 2 * 3.14 * r
    // return circumOfCircle
    console.log(circumOfCircle);

})(4)

--------------------------------------

const substance = (volume , mass)=>{
    return volume / mass
    console.log('This is Density of a substance ');
}
console.log(substance(120 , 12));

------------------------------------

function Body_mass_index(weight , height ) {
    let heightInMiter = height / 100 
    BMI = weight  / (heightInMiter * heightInMiter) 
    if (BMI < 18.5){
        return 'Underweight'
    }
    else if (BMI >= 18.5 && BMI <= 24.9 ){
        return 'Normal weight'
    }
    else if (BMI >= 25 && BMI <= 29.9){
        return 'Overweight'
    }
    else{
        return 'Obese'
    }
}
console.log("'You are in the'" + Body_mass_index(75 , 175 ) + "'weight group'");
console.log(BMI, 'kg');

-----------------------------------

const checkSeason = (month) =>{
    if (month == 'April' || month == 'May' || month == 'June' || month == 'July'){
        console.log('this month is Summer month');
    }
    else if (month == 'August' || month == 'September' || month == 'October'){
        console.log('this month is Summer Rainy Month');
    }
    else if (month == 'November' || month == 'December' || month == 'January' || month == 'Fabruary' || month == 'March'){
        console.log('this month is Summer Winter Month');
    }
}
checkSeason('January')

-------------------------------------

function max(num1 , num2 , num3) {
    if (num1 >= num2 && num1 >= num3){
        return num1
    }
    else if (num2 >= num1 && num2 >= num3){
        return num2
    }
    else{
        return c
    }
}
console.log(max(19,10,18));

-----------------------------------



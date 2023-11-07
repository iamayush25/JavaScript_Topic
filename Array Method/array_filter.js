// filter method filter any value who's test condition is getting true on this condition filter create a new array....


let arr = [72, 4, 60, 77, 2, 45, 7, 86, 3, 5]
let b = arr.filter((newnum)=>{
    return newnum > 10    // condition 
})
console.log(b);
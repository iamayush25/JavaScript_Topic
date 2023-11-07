// Reduce method did multiple operation like ( +, - , * , / )in Each-other elements in the array.

let arr = [2, 4, 2, 9, 3, 10]
let newArr = arr.reduce((a1 , a2)=>{
    return a1 + a2
})
console.log(newArr);
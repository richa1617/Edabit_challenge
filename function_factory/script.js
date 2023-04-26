/*
Function Factory

Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.


*/



function makePlusFunction(baseNum) {
    return (n)=>{
          return n+baseNum
    }
	
}

const plusFive=makePlusFunction(5)
console.log(plusFive(2))
console.log(plusFive(5))
console.log(plusFive(0))
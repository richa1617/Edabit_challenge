
/*
Function Factory

Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

*/




/*function factory(num) {
	return (arr)=>{
        let result=arr.map((e)=>{
            return e/num
        })
         return result
    }
}
*/



function factory(num) {
	return  (arr)=>{
        arr.forEach((e,index)=>{
             arr[index]= e/num
        })
        return arr
    }
    
}

const first=factory(15)
console.log(first([30,45,60]))
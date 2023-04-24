/*

Invert Keys and Values
Write a function that inverts the keys and values of an object.

Examples
invert({ "z": "q", "w": "f" })
➞ { "q": "z", "f": "w" }

invert({ "a": 1, "b": 2, "c": 3 })
➞ { 1: "a", 2: "b", 3: "c" }

invert({ "zebra": "koala", "horse": "camel" })
➞ { "koala": "zebra", "camel": "horse" }
*/




function redundant (str){
	return function (){
		return str
	}
}

const f1=redundant("apple")
console.log(f1())


function add(n){
	return function (x){
        return n+x
	}
}

const f2=add(10)
console.log(f2(20))
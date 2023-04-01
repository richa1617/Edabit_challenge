//Q Ones, Threes and Nines (Version #1)

//Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.

//Examples

/*let n1 = new OnesThreesNines(5)
n1.nines ➞ 0

n1.ones ➞ 5

n1.threes ➞ 1 */



class OnesThreesNines {
	constructor(num) {
		this.num = num;
	}
	get ones() {
		return this.num / 1
	}
	get threes(){
		return Math.floor(this.num / 3)
	}
	get nines(){
		return Math.floor(this.num / 9)
	}
}

let n1=new OnesThreesNines(5)
console.log(n1.nines)
console.log(n1.ones)
console.log(n1.threes)
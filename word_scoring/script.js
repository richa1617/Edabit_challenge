/*
How Good is Your Name?

Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
Return your result as per the following rules:

score <= 60:   "NOT TOO GOOD"

61 <= score <= 300:  "PRETTY GOOD"

301 <= score <= 599:  "VERY GOOD"

score >= 600:  "THE BEST"
Examples
nameScore("MUBASHIR") ➞ "THE BEST"

nameScore("YOU") ➞ "VERY GOOD"

nameScore("MATT") ➞ "THE BEST"

nameScore("PUBG") ➞ "NOT TOO GOOD"

*/

















const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,"U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

function nameScore(name) {
    let sum=0
	let n=name.toUpperCase()
    let arry=[...n]
    
    for(let i=0;i<arry.length;i++){
      sum+=scores[arry[i]]
    }
    

    if(sum <= 60){
		return "NOT TOO GOOD"
	}else if(61 <= sum && sum <= 300){
		return "PRETTY GOOD"
	}else if(301 <= sum && sum <= 599){
		return "VERY GOOD"
	}else if(sum >= 600){
		return "THE BEST"
	}

}



console.log(nameScore("MUBASHIR"))
console.log(nameScore("YOU"))
console.log(nameScore("PUB"))
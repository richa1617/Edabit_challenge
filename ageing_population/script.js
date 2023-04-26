function afterNYears(names, n) {
     for(let name in names){
         console.log(name)
         names[name] = names[name]+n
     }

     return names
	
}


console.log(afterNYears({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }, 1))
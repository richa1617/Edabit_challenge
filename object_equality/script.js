
//Check If objOne Is Equal to objTwo

//Create a function that checks to see if two object arguments


function isEqual(objOne, objTwo) {
	return JSON.stringify(objOne) === JSON.stringify(objTwo);
}


console.log(isEqual({
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
  },{
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
  }))


  console.log(isEqual({
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
  },{
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
  }
  ))


  /*
  Objects are reference types, so you can’t use your normal equality operators, i.e. == or ===. as you use for comparison of primitives.
   As the name suggests JSON.stringify() converts objects to strings first and comparison takes place afterward.


  */


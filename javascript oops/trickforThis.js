/** @format */

// understanding the  concept of this keyword
// how having a new context is important and not creating the context overwrites the older one

function User(name, age) {
	console.log("calling with this concept");
	this.userName = name;
	this.age = age;

	return this;
}

const user1 = User("John", 30);
const user2 = User("navdeep", 25);
console.log(user1);

// gettiung navdeeep as output cause of the context beign changed
// preserer it using new

const user3 = new User("Jn", 30);
const user4 = new User("navi", 25);
console.log(user3);

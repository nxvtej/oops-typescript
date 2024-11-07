"use strict";
// understanding the  concept of this keyword
// how having a new context is important and not creating the context overwrites the older one
function User(name, age) {
    console.log("calling reus with this concept");
    this.userName = name;
    this.age = age;
    return this;
}
/*
// ths throws error as the context by deafult is enforced by typescript and set as undefined

const user1: UserType = User("John", 30);
const user2: UserType = User("navdeep", 25)
console.log(user1)
*/
// now context is set to global object so it gives navdeep as output
const context = {};
const contextAnotherWay = { userName: "", age: 0 };
const user1 = User.call(context, "John", 30);
const user2 = User.call(context, "navdeep", 25);
console.log(user1);
// const setContext = User.bind({}, "John", 30);
// set user as any only then it will work as it  typescript wont let run it throw error
const user3 = new User("John", 30);
const user4 = new User("navdeep", 25);
console.log(user3);
// jyust cant do it in typescript

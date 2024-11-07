
// understanding the  concept of this keyword
// how having a new context is important and not creating the context overwrites the older one

interface UserType {
    userName: string,
    age: number
}


function User(this: any, name: string, age: number): UserType {

    console.log("calling reus with this concept")
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
const context = {}
const contextAnotherWay: UserType = { userName: "", age: 0 }

const user1: UserType = User.call(context, "John", 30);
const user2: UserType = User.call(context, "navdeep", 25)
console.log(user1)


// const setContext = User.bind({}, "John", 30);
// set user as any only then it will work as it  typescript wont let run it throw error
const user3 = new (User as any)("John", 30);
const user4 = new (User as any)("navdeep", 25)

console.log(user3)

// jyust cant do it in typescript


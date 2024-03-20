//object creation
const person = {
    firstname: "Diwakar",
    lastName: "Phuyal",
    age: 19,
    eyeColor: "Brown"
};
console.log(person);

// Objects Methods
const person1 = {
    firstName: "Diwakar",
    lastName: "phuyal",
    id: 9639,
    fullName: function()
    {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person1);
console.log(person1.fullName());
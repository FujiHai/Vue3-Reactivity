let user = {
  firstName: "Gregg",
  lastName: "Pollack",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

console.log(`Name is ${user.fullName}`);

user.fullName = `Adam Jahr`;

console.log(`Name is ${user.fullName}`);

var square = x => x * x; // without () on single argument is ok
console.log(square(9));

var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments); // no arguments binding here
    console.log(`Hi. I'm ${this.name}`); // no this binding here
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);

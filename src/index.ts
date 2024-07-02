// Arrays
let names: string[] = ["steven", "pedro", "jairo"];

names.push("Ana");
// names.push(2);
// names.push(false);

names.forEach((name) => {
  console.log(name.toUpperCase().length);
});

let numbers: number[] = [1, 4, 6];

numbers.push(0);
numbers.push(2);

let mixed: (string | number)[] = ["Steven", 23];

//objets

let user = {
  firstName: "Juan",
  lastName: "Perez",
  age: 25,
};

console.log(user);

user = {
  firstName: "Steven",
  lastName: "Zuluaga",
  age: 90,
};

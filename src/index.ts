// explict types

let age: number = 20;

let user: {
  firstName: string;
  lastName: string;
  age: number;
  isStudent: boolean;
  skills: string[];
};

user = {
  firstName: "Steven",
  lastName: "Zuluaga Cortes",
  age: 28,
  isStudent: true,
  skills: ["React JS", "Next JS"],
};

console.log(user);

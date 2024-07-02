//Type Aliases

type stringOrNumber = string | number;

const greetPerson = (firstName: string, uuid: stringOrNumber) => {
  console.log(`Hello ${firstName}, the personal id is: ${uuid}`);
};

greetPerson("Steven", 123);

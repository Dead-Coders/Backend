const { faker } = require('@faker-js/faker');
const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();

console.log(randomEmail)
console.log(randomName)
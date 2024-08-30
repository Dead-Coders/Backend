const Chance = require('chance')
const chance  = Chance()

console.log(chance.animal())
console.log(chance.sentence({words:  10}))
console.log(chance.birthday({string: true}))
console.log(chance.name({middle:true}))
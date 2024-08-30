// const result = moment().format('MMMM Do YYYY, h:mm:ss a');
// const result = moment().format('LLL');
// const result = moment().format('LTS');
// const result = moment('2022-12-9').add(10, 'y').format('L');

// const result = moment().format('dddd')
const result = moment().format('ddd')

document.querySelector("h1").innerHTML = result;
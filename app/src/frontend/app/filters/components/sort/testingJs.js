// indexOf find the index of first ocurrency of the string passed
// If not find then return -1
const str = '.org';
console.log(str.indexOf('.or'))

// Object.values(array object position) takes all the values of the object and return it as a array.
const data = [ { name: 'cristina', lastName: 'rojas', age: '30'}];
console.log(Object.values(data[0])) //  ["cristina", "rojas", "30"]

// filter return an array of elements that pass certain test (function condition)
const names = ['cristina', 'rojas', 'zamora'];

const result = names.filter((name) => {
  if(name === 'cristina') {
    return name;
  }
})

console.log('result--->', result)

// filter & inside Object.values convert every object property values into an array
const data = [ { name: 'cristina', lastName: 'rojas', age: '30'}, { name: 'cristina', lastName: 'santana', age: '31'}];

const results = data.filter((user) => {
  console.log('user-------------->',Object.values(user))
  const name = "cristina";
  if (Object.values(user).indexOf(name) !== -1 ) {
    return user;
  }
})

console.log('results-->', results);

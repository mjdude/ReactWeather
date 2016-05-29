// var names = ['mo', 'jo', 'andrew'];
//
// names.forEach(function(name){
//   console.log('foreach ',name);
// });
//
// names.forEach((names) => {
//   console.log('arrowFunc ' , names);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Mo'));
//
// var person = {
//   name: 'Mo',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' Hi to ' + name);
//     });
//   },
// };
//
// person.greet();

// challange area


function add (a , b){
  return a + b;
};

var addStatement = (a,b) => {
  return a + b;
};

var addExpression = (a,b) => a+b;

console.log( add( 1, 3), 'standard function');
console.log(addStatement(10,0), 'arrow function');
console.log(addExpression(11,0) , 'single line arrow function');

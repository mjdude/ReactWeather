var names = ['mo', 'jo', 'andrew'];

names.forEach(function(name){
  console.log('foreach ',name);
});

names.forEach((names) => {
  console.log('arrowFunc ' , names);
});

names.forEach((name) => console.log(name));

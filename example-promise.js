function addPromise (a,b){
   return new Promise(function(resolve, reject){
     if(typeof a === 'number' && typeof b === 'number'){
       resolve(a + b);
     }
     else {
       reject('Inputs are not both numbers');
     }
   });
}

addPromise(3,'4').then(function(result){
  console.log(result);
},function(err){
  console.log('There was an error. ' + err);
});

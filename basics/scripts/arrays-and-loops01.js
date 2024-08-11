const myArray = [15, 25, 35];
console.log(myArray);

console.log(myArray[1]);
myArray[0] = 99;
console.log(myArray);

let mixedArray = [1, 'Hello', true, {name: 'socks'}, [1, 2, 3]];
console.log(mixedArray);
mixedArray.push(999);
console.log(Array.isArray([7, 11]));

myArray.splice(1, 2);
console.log(myArray);

console.log('Looping:');
let index = 1;
while(index <= 13){
  console.log(index)
  index++;
}
console.log('Looping:');
for(index=1; index <= 17; index++){
  console.log(index * 10);
}

[
  'make dinner',
  'wash dishes',
  'watch  youtube'
].forEach(function(value, index){
  // console.log(index);
  console.log(value);
});




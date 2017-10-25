var a = [3,1,2];
console.log(a);

// default sort() function
a.sort();
console.log(a);

// define a rev() function which returns a subtraction
function rev(v1, v2) {
  return v1 - v2;
}
// using rev() function as a callback
a.sort(rev);
console.log(a);

// using arrow function as a callback
a.sort((v1,v2) => {return v2-v1});
console.log(a);

// using anonymous function as a callback
a.sort(function (v1,v2) {return v1-v2});
console.log(a);

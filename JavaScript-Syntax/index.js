arr1 = [1, 2, 2, 1];

funct = (arr) => {
  // returns unique items in array, in order of when they first appear
  return [... new Set(arr)];
}

console.log(funct(arr1));

// const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)));

// array.every always returns true on empty arrays, so need additional condition
if(arr1.length > 0 && arr1.every(Number.isFinite)) {
  console.log(true);
}

// Destructuring assignment
let [r, g, b, a] = [255, 0, 0, 255];
console.log(r);

// gets an item from the list and wraps around to the start if n is larger than the list
// items[n % items.length]

// Returns random HEX colors
console.log('#'+Math.floor(Math.random()*16777215).toString(16));
// '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')

// Random IDs as well, will need to figure out syntax
// ` _${Math.random().toString(36).substr(2)}`

// Random string of letters
console.log(String.fromCharCode(...Array.from({length: 12}, _ => Math.random() * 25 + 97 | 0)));

[...String.raw({ raw: ['',...Array.from( new Array(16), () => 'x'-'y')]}, '!namtaB ')].reverse().join("")

// [...Array(5).keys()]

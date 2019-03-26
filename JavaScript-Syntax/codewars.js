// Create a like system, similar to what Facebook/Instagram have
// where if there's more than 2 likes, not all the names are displayed

const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


// Example 1

function likes(names) {

  names = names || [];
  let lt = 'like this';

  switch(names.length){
    case 0: return 'no one ' + lt.splice(4, 0, "s"); break;
    case 1: return names[0] + ' ' + lt; break;
    case 2: return names[0] + ' and ' + names[1] + ' ' + lt; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' ' + lt; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others ' + lt;
  }
}

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

console.log(likes());
console.log(likes(names));


// Example 2

function likes2 (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];

  // if the length of the array is larger than the template's array,
  // defaults to the index of the last array value
  var idx = Math.min(names.length, 4);

  // replace(x, y) - replaces x with y
  // shifts values in name array to {name}, or the length to {n}
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}

console.log(likes2([]));
console.log(likes2(names));


// Example 3

function likes3(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length} others like this`,
  }[Math.min(4, names.length)]
}

console.log(likes3([]));
console.log(likes3(names));

// Slightly more simplified version of the return statement above
function funct() {
  return {
    0: '0',
    1: '1',
    2: '2',
  }[1]
}

funct();
// >>> 1

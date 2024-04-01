// Initialize the cats array with some initial values
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array (modifies original array)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the cats array (modifies original array)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the cats array (modifies original array)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the cats array (modifies original array)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the cats array and return a new array (leaving the original array unchanged)
function appendCat(name) {
  return cats.concat([name]);
}

// Function to prepend a cat to the cats array and return a new array (leaving the original array unchanged)
function prependCat(name) {
  return [name].concat(cats);
}

// Function to remove the last cat from the cats array and return a new array (leaving the original array unchanged)
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat from the cats array and return a new array (leaving the original array unchanged)
function removeFirstCat() {
  return cats.slice(1);
}



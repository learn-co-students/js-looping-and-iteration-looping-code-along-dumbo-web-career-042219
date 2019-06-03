// Code your solutions in this file
//
// In `index.js`, build a function named `writeCards()` that accepts two arguments:
// an array of string names, and an event name. Create a `for` loop with a counter
// that starts at `0` and increments at the end of each loop. The condition should
// halt the `for` loop after the last name in the array is printed out in the loop
// body.

function writeCards(array, eventName) {
  let messages = []
  for (let i = 0; i < array.length; i++) {
    messages.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
  }
  return messages
}

function countdown(integer) {
  while(integer >= 0) {
    console.log(integer);
    integer -=1
  }

}

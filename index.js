// Code your solutions in this file
function writeCards(arr, event) {
  let output = []
  for(let i = 0; i < arr.length; i++){
    output.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
  }
  return output
}

function countdown(int) {
  while(int > -1) {
    console.log(int);
    int--;
  }

}

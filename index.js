// Code your solutions in this file
function writeCards(arr,string){
  let new_arr = [];
  for (let i = 0; i < arr.length; i++){
    new_arr.push(`Thank you, ${arr[i]}, for the wonderful ${string} gift!`);
  }
  return new_arr
}


function countdown(){
  let i = 10;

  while (i >= 0) {
    console.log(i--);
  }
}

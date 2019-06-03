// Code your solutions in this file
function writeCards(nameArray, event) {
	let cards = []
	for (let i = 0; i < nameArray.length; i++) {
		cards.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
	}
	return cards
}

function countdown(countdown) {
	while (countdown > 0) {
		console.log(countdown);
		countdown -= 1;
	}
	console.log(countdown);
}

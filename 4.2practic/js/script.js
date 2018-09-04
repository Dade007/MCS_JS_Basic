const rock = 0;
const scissors = 1;
const paper = 2;

let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (computer == 0 && player == 2){
	console.log('computer rock, lose')
	} 
	else if (computer == 0 && player == 1){
	console.log('computer rock, win')
	}
	else if (computer == 0 && player == 0){
	console.log('computer rock, ничья')
	}
	else if (computer == 1 && player == 0){
	console.log('computer scissors, lose')
	}
	else if (computer == 1 && player == 2){
	console.log('computer scissors, win')
	}
	else if (computer == 1 && player == 1){
	console.log('computer scissors, ничья')
	}
	else if (computer == 2 && player == 1){
	console.log('computer paper, lose')
	}
	else if (computer == 2 && player == 0){
	console.log('computer paper, win')
	}
	else if (computer == 2 && player == 2){
	console.log('computer paper, ничья')
	}
	else {
		console.log('Введите число!!!')
	}
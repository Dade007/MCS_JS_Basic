const Colored = document.querySelector('.colored');
console.log (Colored);

console.log(Colored.style);
let quest = prompt ('Какой цыет');
//Colored.style.backgroundColor = "blue";
Colored.style['background-color'] = quest;
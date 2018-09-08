
/*function moduleSquare (num) {
	return Math.abs(num) / 2;
}
console.log(moduleSquare(-3));
console.log(moduleSquare(-3));

console.log(Math.floor(2.465));

console.log(Math.round(2.789));

console.log(Math.random()*(10-5)+5);
console.log(Math.floor(Math.random()*(10-5)+5));


const a = prompt ('Введите число');

function module (a) {
	 
	return Math.abs(a) ** Math.floor(Math.random()*(10-1)+1);
}

console.log(module(a));


 let person = {
 	name : "Саща",
 	surname : "Патлух",
 	age : 30,
 	teacher: true,
 	sayHello : function() {return 'Hello'+ this.name}
 }

 console.log(person.name);
  console.log(person.sayHello());


  let people = ['Vasya','peta','Sasha']
  console.log(people);

const cart = {
  orderID: 12345,
  shopperName: "Ваня Иванов",
  shopperEmail: "ivanov@example.com",
  contents: [
    {
      productID: 34,
      productName: "Супер товар",
      quantity: 1
    },
    {
      productID: 56,
      productName: "Чудо товар",
      quantity: 3
    }
  ],
  orderCompleted: true
}
console.log(cart.contents[1].productName);
*/

//const cools = document.getElementsByClassName('cool');
const cools = document.getElementsByTagName('div');
console.log(cools[0]);
cools[0].innerHTML = 'i am first';
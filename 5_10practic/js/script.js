

let crypto = [
  {
    name : "Bitcoin",
    price: 900
  },
  {
    name : "Ethereum",
    price: 500
  },
  {
    name : "Litecoin",
    price: 140
  }
]

//for (key in crypto){
//  console.log(crypto[key])
//}

//for (h of name) {
  // h.innerHTML = 're';
//}
    
const name = document.querySelectorAll('h');
const price = document.querySelectorAll('p');

for (let i=0; i < name.length; i++) {
  name[i].innerHTML = crypto[i].name;
}
for (let i=0; i < name.length; i++) {
  price[i].innerHTML = crypto[i].price;
}

const bit = document.querySelector('.bit');
bit.style.width = crypto[0].price + 'px';

const et = document.querySelector('.ethere');
et.style.width = crypto[1].price + 'px';

const lt = document.querySelector('.liteco');
lt.style.width = crypto[2].price + 'px';
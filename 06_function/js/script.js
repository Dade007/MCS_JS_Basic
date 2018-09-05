//let myFunc = function (element,color) {
	//element.style.backgroundColor = color;
//}

//const head = document.querySelector('h1');
//myFunc(head, 'yellow');



d = prompt('Сколько у вас денег?');
d = +d;
ya = prompt('Сколько вы купили яблок?');
ya = +ya;
b = prompt('Сколько вы купили батонов?');
b = +b;

sya = prompt('Сколько стоит 1 яблоко?');
sya = +sya;
sb = prompt('Сколько стоит 1 батон ?');
sb= +sb;

r = d > ya*sya + b*sb;
let haveEnough = (d, ya, b, sya, sb, r) => {
 
 if (r == true){
 	alert ("Вам хватило денег") ;
 } else {
 	alert ("Вам  не хватает денег");
 }
}
haveEnough(d, ya, b, sya, sb, r);
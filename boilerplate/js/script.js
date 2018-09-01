d = prompt('Сколько у вас денег?')
d = +d
ya = prompt('Сколько вы купили яблок?')
ya = +ya
b = prompt('Сколько вы купили батонов?')
b = +b

sya = prompt('Сколько стоит 1 яблоко?')
sya = +sya
sb = prompt('Сколько стоит 1 батон ?')
sb= +sb

r = d > ya*sya + b*sb
document.body.innerHTML = r
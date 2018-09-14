
/*let Animal = {
	canEat : true,
	hasParents: true
}

let Cow = {
	givesMilk: true,
	__proto__: Animal
}

console.log(Cow.givesMilk);
console.log(Cow.canEat);

for (key in document){
	console.log(document.compatMode);
}

let Users = {
	hasAccesToProfile: true,
	approved: true,
	sayHi : function() {return 'привет'}
}

function User(name, email, passoword) {
	this.name = name;
	this.email = email;
	this.passoword = passoword;

	this.__proto__ = Users;
}

let Fedya = new User('Федя', 'fedua@mail.com','qwery')

console.log(Fedya);

function FUser(name, email, passoword) {
	this.name = name;
	this.email = email;
	this.passoword = passoword;

	this.__proto__ = Users;
	this.sayHi = function() {return 'ты зарегестрирована '+this.name+''}
}


const Alla = new FUser ('Алла', 'as@rb.ru','13123')
console.log(Alla);
console.log(Alla.sayHi());*/

class User {
	constructor (name, email, passoword){
		this.name = name;
		this.email = email;
		this.passoword = passoword;
	}
	sayHi () {
		return 'Hellow' + this.name;
	}
}

class Female extends User {
	 sayHi () {
	 	return 'Hellow '+this.name+' ты зарегестрирована';
	 }
}

const Man = new User ('dasd','123','dfsf')
console.log(Man);

const Ana = new Female ('Ana','123@rty','qwer')
console.log(Ana);
console.log(Ana.sayHi());


class Custamer {
	constructor(name) {
		this.name = name;
	}
	bue () {
		return 'Куплено '+this.name+'';
	}
}
const Ball = new Custamer('Мяч')
console.log(Ball);
console.log(Ball.bue());

class childCustomer extends Custamer {
	getPresent (){
		return 'Куплено '+this.name+' и шарик в подарок';
	}
}

const Pen = new childCustomer ('Ручка')
console.log(Pen);
console.log(Pen.getPresent());
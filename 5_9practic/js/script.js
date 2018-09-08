let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
]
//console.log(names[0][0]);
names.forEach((nag) => {
	nag.forEach((animals) =>{
		animals.forEach((animal)=>{
			console.log(animal);
		})
		})
})

/*
for (nameArr of names) {
	for (animals of nameArr) {
		for (animal of animals){
			console.log(animal);
		}
	}
	console.log(names);
}*/


window.addEventListener ('load', function(){

 class Person {
       constructor (name,happines) {
       	this.name = name;
       	this.happines = 0;
       }
       hasCat(){
       	 return this.happines = this.happines + 1;       	
       }
       hasRest(){
       	 return this.happines = this.happines + 1;       	
       }
       hasMoney(){
       	 return this.happines = this.happines + 1;       	
       }

 }


const button = document.querySelector('input[type="submit"]');

button.addEventListener ('click', function(e){
      e.preventDefault();

      const name =  document.querySelector('input[name="name"]');
       var N = name.value;
      const cat =  document.querySelectorAll('input[name="cat"]');
       var C = cat[0].checked;
       var NC = cat[1].checked;
      const rest =  document.querySelectorAll('input[name="rest"]');
       var R = rest[0].checked;
       var NR = rest[1].checked;
      const money =  document.querySelectorAll('input[name="money"]');
       var M = money[0].checked;
       var NM = money[1].checked;

      const a = new Person (N , 0);
      
      if ( C == true  ) {
            a.hasCat();
           // console.log(a.happines);
      } else {}
       if (R == true){ 
            a.hasRest();
          //  console.log(a.happines);
      } else {}
       if (M == true) {
            a.hasMoney();
          // console.log(a.happines);
      } else {}
      
var S = a.happines;
console.log(S);


const people = document.querySelector('.personName');
//console.log(people);
people.innerHTML = N;
const icon = document.querySelector('img');

if (S<=0) {
      icon.setAttribute('src', 'g.png');
}  else if (S == 1 || S == 2 ) {
      icon.setAttribute('src', 'p.png');
} else  {
      icon.setAttribute('src', 'v.png');
} 


})


})


 //const M = document.querySelector('.modul');


 let M = prompt('Введите число');
 M = parseInt(M);

 if (M>0){
     console.log(M);   
 } else if (M<0) {
 	M = -M;
 	console.log(M); 
 
 } else {
 	M = 0;
 	console.log(M);
 }

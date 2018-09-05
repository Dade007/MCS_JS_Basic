const buttonG = document.querySelector('.request');
  const popup = document.querySelector('.popup');
  
  const buttonCl = document.querySelector('.closePopup');
 
	 buttonG.addEventListener('click', ()=>{
	 popup.style.display = 'flex';
  })
   
   buttonCl.addEventListener('click', ()=>{
	 popup.style.display = 'none';
  	
	})
 
 const Men = document.querySelector('.menu');
 const buttonM = document.querySelector('.OpenMenu');
 const buttonC = 
 document.querySelector('.closeMenu');
 
 buttonM.addEventListener('click', ()=>{
	 Men.style.left = '0';
  })
  
  buttonC.addEventListener('click', ()=>{
	 Men.style.left = '-50vw';
   })
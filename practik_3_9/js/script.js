const Font = document.querySelector('.font');
 console.log(Font);
 let f = prompt('Какой будет фон у страницы?')
 Font.style['background-color'] = f;

 let c = prompt('Какой будет цвет текста?')
 const Text = document.querySelector('.page');
 Text.style['color'] = c;

 let i = prompt('Какой персонаж вас вдохновляет?')
 const N = document.querySelector('span');
 console.log(N);
 N.innerText = i;

let I = prompt('Введите адрес картинки');
const image = document.querySelector('img');
console.log(image.getAttribute('src'));
image.setAttribute('src', I);

let text = prompt('Введите текст страницы');
const T = document.querySelector('p');
console.log(T);
T.innerText = text;

const Anim = document.querySelector('.shortBio');
console.log(Anim.className);
Anim.className += ' animated';
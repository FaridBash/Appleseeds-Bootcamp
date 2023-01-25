

const btn=document.querySelector('.btn');
const bulb=document.getElementById('circle1');

bulb.setAttribute('class','turnOn');
bulb.setAttribute('class','turnOff');

btn.setAttribute('class','turnOn');
btn.setAttribute('class','turnOff');


btn.addEventListener('click',event=>{

bulb.classList.toggle('turnOn');
btn.classList.toggle('turnOn')
});
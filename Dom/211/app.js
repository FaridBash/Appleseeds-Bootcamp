

const btn=document.getElementById('btn');
const h=document.createElement('h3');
const myForm=document.querySelector('form');
myForm.appendChild(h);

btn.addEventListener('click', event=>{
    event.preventDefault();
    btn.innerText='clicked';
    if(document.getElementById('age').value<18){
        h.innerText="You are too young";
    }
    else if(document.getElementById('age').value>=18){
        h.innerText="You can drink";  
    }
    btn.innerText="clicked";
});
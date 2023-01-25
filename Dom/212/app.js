

const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
let size=10;
const para=document.querySelector('p');
para.style.fontSize=`${size}px`;
plus.addEventListener('click', event=>{
    event.preventDefault();
    size++;
    if(size<=100){
    console.log('size: '+size );
    para.style.fontSize=`${size}px`;}
});


minus.addEventListener('click', event=>{
    event.preventDefault();
    size--;
    if(size>=6)
    {console.log('size: '+size );
    para.style.fontSize=`${size}px`;}
});
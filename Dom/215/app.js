


const btn=document.querySelector('button');
const imgHolder=document.querySelector('section');
const h=document.createElement('h1');
    h.innerText="Farrid";


btn.addEventListener('click',e=>{
    e.preventDefault();
    // btn.style.backgroundColor='green';
    const num=document.querySelector('input');

    while (imgHolder.firstChild) {
        imgHolder.removeChild(imgHolder.firstChild);
    }
    
    const times=Number(num.value);    
    if(typeof times ==='number'){
        for (let i = 0; i <times; i++){
            const addSmiley=document.createElement('IMG');
            addSmiley.setAttribute("src", "png-clipart-smiley-desktop-happiness-face-smiley-miscellaneous-face.png");
            addSmiley.setAttribute("width", "50px");
            addSmiley.setAttribute("height", "50px");
            imgHolder.appendChild(addSmiley);   
            
        }
    }
    else{
        alert("Must type number");
    }
});
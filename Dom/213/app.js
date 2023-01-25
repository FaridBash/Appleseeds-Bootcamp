


const btn=document.querySelector('button');
const txt=document.querySelector("textarea");

btn.addEventListener('click', event=>{
    event.preventDefault();
    const textLength=txt.value.length;
    console.log(textLength);
    if(textLength<100){
        alert("Forbidden --- you need at least 100 characters");
        
    }
});
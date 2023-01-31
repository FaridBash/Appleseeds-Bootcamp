



function main(){
    window.requestAnimationFrame(main);
    update();
}

window.requestAnimationFrame(main);

const seconds=document.getElementById('seconds');

const mins=document.getElementById('mins');

const hours=document.getElementById('hours');





function update(){
    
        const now = new Date();
        const hoursAndMinutes = now.getHours()/2 + ':' + now.getMinutes() +":"+now.getSeconds();
        console.log(hoursAndMinutes); // 👉️ 13:28
        seconds.style.rotate=`${((now.getSeconds()+20)*6)}deg`;
        mins.style.rotate=`${(((now.getMinutes()))*6)}deg`;
        hours.style.rotate=`${((now.getHours()/2))*60}deg`;
    
}


document.body.style.backgroundColor="#2193b0";
const main=document.body;
const header=document.createElement('ul');
main.appendChild(header);
const h1=document.createElement('h1');
header.appendChild(h1);
h1.innerText='My Website';
h1.style.color="#fff";
// h1.style.position="absolute";
h1.style.zIndex="3";
header.style.display="flex";
header.style.justifyContent="space-between";
header.style.backgroundColor="#333";
header.style.opacity="50%";
const ul2=document.createElement('ul');
ul2.style.width="300px"
ul2.style.listStyle='none';
ul2.style.display="flex";
header.appendChild(ul2);
const li=document.createElement('li');
li.innerText="Menu";
li.style.padding='1.5rem 0.5rem';
ul2.appendChild(li);
ul2.style.color="white";
const li2=document.createElement('li');
li2.innerText="About";
li2.style.padding='1.5rem 0.5rem';
ul2.appendChild(li2);
const li3=document.createElement('li');
li3.innerText="Home";
li3.style.padding='1.5rem 0.5rem';
ul2.appendChild(li3);
const li4=document.createElement('li');
li4.innerText="Contact Us";
li4.style.padding='1.5rem 0.5rem';
ul2.appendChild(li4);
li.addEventListener('mousemove', e=>{
    li.style.color="#FFEA20";
});
li.addEventListener('mouseout', e=>{
    li.style.color="#fff";
});
li2.addEventListener('mousemove', e=>{
    li2.style.color="#FFEA20";
});
li2.addEventListener('mouseout', e=>{
    li2.style.color="#fff";
});
li3.addEventListener('mousemove', e=>{
    li3.style.color="#FFEA20";
});
li3.addEventListener('mouseout', e=>{
    li3.style.color="#fff";
});
li4.addEventListener('mousemove', e=>{
    li4.style.color="#FFEA20";
});
li4.addEventListener('mouseout', e=>{
    li4.style.color="#fff";
});


const title=document.createElement('h1');
title.innerText="This is my JS website";
main.appendChild(title);
title.style.color="#fff";
title.style.margin="12% 23%";
title.style.fontSize="100px";
title.style.width="50vw";
const hh=document.createElement("h3");
hh.innerText="WE SHOULD WORK HARD";
const h3Holder=document.querySelectorAll('h1');
h3Holder[1].appendChild(hh);
hh.style.fontSize="50px";
hh.style.margin="2% 15%";
hh.style.width="100%";
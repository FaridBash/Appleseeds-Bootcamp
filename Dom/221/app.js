
const usernameInput=document.getElementById('username');
const ageInput=document.getElementById('age');
const emailInput=document.getElementById('email');
const submitBtn=document.getElementById('submit');

const usernameHolder=document.getElementById('user-p');
const ageHolder=document.getElementById('age-p');
const emailHolder=document.getElementById('email-p');

const confirmBtn=document.getElementById('confirm-btn');
const editBtn=document.getElementById('edit-btn');

const confirmForm=document.getElementById('confirm-form');
const submitForm=document.getElementById('submit-form');

submitBtn.addEventListener('click', e=>{
    e.preventDefault();
    usernameHolder.innerText=usernameInput.value;
    ageHolder.innerText=ageInput.value;
    emailHolder.innerText=emailInput.value;
    submitForm.style.display='none';
    confirmForm.style.display='flex';

});

editBtn.addEventListener('click', e=>{
    e.preventDefault();
    confirmForm.style.display='none';
    submitForm.style.display='flex';
    usernameInput.focus();
});

confirmBtn.addEventListener('click', e=>{
    alert('congratulations you successfully sent this form');
});

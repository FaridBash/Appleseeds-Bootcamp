

function vPassword(password){

    if(password.length >7 && password!=password.toLowerCase()){
        return "Very Strong";
   }
   else if(password.length>7){
    return "Strong";
   }
   else{
    return "Weak";
   }
}


function iPassword(password){
   return password.length > 7 ? "Strong": "Weak";
}

console.log(vPassword("556"));
console.log(vPassword("freedbashiti"));
console.log(vPassword("fareedBashiti"));

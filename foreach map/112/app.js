
console.log("Question 1");
const arr=[1, 2, 3, 4, 5, 8];


function doubleValues(arr){
    const doubledArr=[];
    
    arr.forEach(element => {
        if(typeof element !=='number'){
            console.log("not integer's array");
        }

        else if(typeof element ==='number'){
            doubledArr.push(element*2);
        }
    });
    return doubledArr;
}
console.log(doubleValues(arr));

console.log("Question 2");
function even(arr){
    const evenArr=[];
    if(Array.isArray(arr)){
        arr.forEach(function(n){
            if(n%2===0){
                evenArr.push(n);
            }
        });
    }
    else{
        return;
    }
    return evenArr;
}

console.log(even(arr));
console.log("Question 3");
const str=[125,'farid','is','programmer','and','keeps',1];
function showFirstAndLast(arr){
    const newArr=[];
    let last='';
    let weHaveFirst=false;
    let weHaveLast=false;
    arr.forEach(function(n){
        if(typeof n ==='string' && !weHaveFirst){
            newArr.push(n);
            weHaveFirst=true;
        }
        else if(typeof n ==='string' && weHaveFirst && !weHaveLast){
            newArr.push(n);
            last=n;
            weHaveLast=true;
        }
        else if(typeof n ==='string' && weHaveFirst && weHaveLast){
            newArr.pop(last);
            newArr.push(n);
            last=n;
        }
    });
    return newArr;
}

console.log(showFirstAndLast(str));

// question4
console.log("Question 4");
function vowelCount(str){
    str=str.toLowerCase();
    str=str.split("");
    const vowel={};
    str.forEach(function(l){
       
        if(l==='a'){
            if(isNaN(vowel.a)){
                return vowel.a=1;
            }
            else vowel.a+=1;
        }
        if(l==='e'){
            if(isNaN(vowel.e)){
                return vowel.e=1;
            }
            else vowel.e+=1;
        }
        if(l==='i'){
            if(isNaN(vowel.i)){
                return vowel.i=1;
            }
            else vowel.i+=1;
        }
        if(l==='o'){
            if(isNaN(vowel.o)){
                return vowel.o=1;
            }
            else vowel.o+=1;
        }
        if(l==='u'){
            if(isNaN(vowel.u)){
                return vowel.u=1;
            }
            else vowel.u+=1;
        }
    });

    return vowel;
}

console.log(vowelCount("Faruid Bashiti"));

console.log("Question 5");
function capitalize(str){
    str=str.split("");

    const capitalize=str.map(function(n){
        return n.toUpperCase();
    });
    newStr='';
    capitalize.forEach(function(l){
        newStr+=l;
    });

    return newStr;
}

console.log(capitalize('farid is programmer'));

console.log("Question 6");

function shiftLetters(str){

    str=str.split("");
   const newL=str.map(function(n){
        if(n!==" "){
            let code=n.charCodeAt(0);
            code=code+1;
            return String.fromCharCode(code);
        }
        else{
            return " ";
        }
    });

    let newStr='';
    newL.forEach(function(l){
        newStr+=l;
    });
    return newStr;
}

console.log(shiftLetters('abcd efgh'));

console.log("Question 7");

function otherWord(str){

    str=str.split(" ");
    str.forEach(function(n,index){
        if(index%2!==0){
            str[index]=capitalize(n);
        }
    });
    
     return str.join(' ');

}

console.log(otherWord("farid is good programmer"));
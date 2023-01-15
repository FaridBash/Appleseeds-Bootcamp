

function display(str){

    console.log(str);
}

function isString(str, myCallBack){

    if(typeof(str)==='string'){
        myCallBack(str);
    }
}

isString('farid',display);


function dashed(arr){
    let str='';
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!=' '){
            str+=arr[i];
        }
        else if(arr[i]===' '){
            str+='-';
        }
        
    }

    console.log(str);
}

function numberOfLetters(arr){
    let counter=0;
    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i]!=' ')
            counter++;
    }

    console.log(counter);
}

function firstWordUpperCase(str, callback){

    let myArr=str.split("");
    let word=myArr[0].toUpperCase();
    myArr.splice(0,1,word)
    console.log(myArr);
    callback(myArr);
}

firstWordUpperCase("what a sunny day", dashed);

firstWordUpperCase("what a sunny day", numberOfLetters);


function displayAvg(avg){

    console.log(avg);

}

function avg2(num1, num2, callback){
    const avg=(num1+num2)/2;

    callback(avg);

}

avg2(5, 10 ,displayAvg);
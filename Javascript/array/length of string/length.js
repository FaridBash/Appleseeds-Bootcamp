

function lengthof(arr){
    lengthArr=[];
    let strLength=0;
    for (let i = 0; i < arr.length; i++) {
        strLength=0;
        for (let j = 0; j < arr[i].length; j++) {
            strLength++;
            
        }
        lengthArr[i]=strLength;
    }
    return lengthArr;
}


let arr=["Farid", "fari", "far", "fa","f"];

console.log(lengthof(arr));
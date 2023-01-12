
const dup=[88,8,8,8,8,88,88,88,8];


function removeDup(arr){
    const newArr=[];
    for (let i = 0; i < arr.length; i++) {
        
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}


console.log(removeDup(dup));
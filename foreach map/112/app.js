

const arr=[1, 2, 3, 4];


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
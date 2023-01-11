
const myob={
    'car':'toyota',
    'model':'corola'
}

function swap(o){

    const newO={};

    for(let key of Object.keys(o)){
        newO[o[key]]=key;
    }

    return newO;
}


console.log(swap(myob));


const car={
    'model':'ford',
    'year':2007
}

const arr=[];
for (let index = 0; index < 100; index++) {
    arr.push(' f ');
    
}

arr.fill(car,0,arr.length);

console.log(arr);

const hundredArr=Array.from(Array(101).keys());



const values=[];
for (let i = 0; i < arr.length; i++) {
    const mycar=arr[i];
    for(let m of Object.keys(mycar)){
        values.push(mycar[m]);
    }
    
}

let arrObj = Object.assign({},values);
console.log(arrObj);

console.log(Array.isArray(values));
if(Array.isArray(values)){
    console.log("it is array");
}

// copy of array that wont affect original array

const noAffectArr = structuredClone(arrObj);

// array that will affect
const affectArr=arrObj;

console.log(noAffectArr);
console.log(affectArr);
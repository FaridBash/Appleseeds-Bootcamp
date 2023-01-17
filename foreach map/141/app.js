
const nums=[1,2,3];
const max=nums.reduce((max, cval)=>{
    if(cval>max) return cval;
    else return max;
});

console.log(max);

const sumE=nums.reduce((total, cval)=>{
    if(cval%2===0) return total+=cval;
    else return total;
});
console.log(sumE);
console.log("========avg=============");

const average =nums.reduce((a, b) => a + b, 0) / nums.length;

console.log(average);
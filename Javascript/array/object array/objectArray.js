
let arr=[];
let car={
    "color":"red",
    "type":"cabrio"
}
for (let i = 0; i < 100; i++) {
    
    arr.push(car);
}

let hundred=[];
for (let i = 0; i <100 ; i++) {
    hundred.push(i);
}

let value=[];
for (let index = 0; index < arr.length; index++) {
    value.push(Object.values(car))
    // console.log(Object.values(car));
    
}

let obj = Object.fromEntries(value);

let isARray=obj.isArray();

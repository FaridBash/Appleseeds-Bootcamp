
const car={
    name:'Ford',
}

const hotel={
    name:'Inbal',
}
const course={
    name:'js',
}

const mapObj = new Map([
    [car, 1],
    [hotel, 2],
    [course, 3]

]);

// console.log("before loop");
// console.log(mapObj);

for (let [key, value] of  mapObj.entries()) {
    for(let k of Object.keys(key)){

        console.log(key[k] + " = " + value)
    }
}
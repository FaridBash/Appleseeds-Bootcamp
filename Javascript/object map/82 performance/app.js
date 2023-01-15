

let myObj={}
const course=500;

let myMap=new Map();
// myObj=course;


console.time("My_operation")
for (let index = 0; index < 1000000; index++) {
    myObj[index]=index;
    
}

console.timeEnd("My_operation")
// ========================================
console.time("Map_operation")

for (let index = 0; index < 1000000; index++) {
    myMap.set(index, index);
    
}

console.timeEnd("Map_operation")


//===========================================


console.time("find_obj_operation")
myObj[50000];

console.timeEnd("find_obj_operation")

console.time("find_map_operation")
myMap[50000];

console.timeEnd("find_map_operation")

console.time("add_obj_operation")
myObj.add='farid';

console.timeEnd("add_obj_operation")

console.time("add_map_operation")
myMap.add='farid';

console.timeEnd("add_map_operation")
console.time("del_obj_operation")
delete myObj.add;

console.timeEnd("del_obj_operation")

console.time("del_map_operation")
delete myMap.add;

console.timeEnd("del_map_operation")


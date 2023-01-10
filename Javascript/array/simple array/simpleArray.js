let people = ["Greg", "Mary", "Devon", "James"];

for(let i=0; i<people.length; i++){
    console.log(people[i]);
}

people.splice(0,1);
people.pop();
people.unshift('MAtt');
people.push("Farid");

for (let index = 0; index < people.length; index++) {
    
    console.log(people[index]);

    if (people[index]==="Mary") {
        break;
    }

}

let copy=people.slice(2);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"elizabeth","Artie" );



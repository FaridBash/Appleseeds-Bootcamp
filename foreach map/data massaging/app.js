const data = [
{
name: "John",
birthday: "1-1-1995",
favoriteFoods: {
meats: ["hamburgers", "sausages"],
fish: ["salmon", "pike"],
},
},
{
name: "Mark",
birthday: "10-5-1980",
favoriteFoods: {
meats: ["hamburgers", "steak", "lamb"],
fish: ["tuna", "salmon", "barracuda"],
},
},
{
name: "Mary",
birthday: "1-10-1977",
favoriteFoods: {
meats: ["ham", "chicken"],
fish: ["pike"],
},
},
{
name: "Thomas",
birthday: "1-10-1990",
favoriteFoods: {
meats: ["bird", "rooster"],
fish: ["salmon"],
},
},
{
name: "Mary",
birthday: "1-10-1977",
favoriteFoods: {
meats: ["hamburgers", "lamb"],
fish: ["anchovies", "tuna"],
},
},
];

console.log("Question 1");
const names= data.map(function(n){
    return n.name;
});
console.log(names);
console.log('=====================================================');

console.log("Question 2");
function before90(arr){
    const newArr=[];
    arr.forEach(function(n){
    // console.log(Date.parse('1-1-1990'));
        if(Date.parse(n.birthday)<Date.parse('1-1-1990')){
            newArr.push(n);
        }
    
    });

    return newArr;
}

console.log(before90(data));

console.log('=====================================================');
console.log("Question 3");

function foodObj(arr){
    let foodArr=[];
    const counts={};
    arr.forEach(function(n){
        // console.log(n.favoriteFoods);        
        n.favoriteFoods.meats.forEach(function(l){
            foodArr.push(l);
        });
        n.favoriteFoods.fish.forEach(function(f){
            foodArr.push(f);
        });
        // console(foodArr);
        
    });

    foodArr.forEach(function(n){
        counts[n]=(counts[n]||0)+1;
        
        
    });
    return counts;
    // console.log(counts);
}

// foodObj(data);
console.log(foodObj(data));
    

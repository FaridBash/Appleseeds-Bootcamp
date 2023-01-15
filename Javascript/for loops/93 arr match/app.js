

const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];


const haveMatch=(arr1, arr2)=>{

    let match=[];
    let word='';
    let r;
    for (let i = 0; i < food.length; i++) {
        
        word=food[i];
        
        for (let j = 0; j < food1.length; j++) {
            
            if(word===food1[j]){
                match.push(word);
            }
        }
        
    }
    
    if(match.length>0){
        return r=match;
    }
    return false;
}

console.log(haveMatch(food,food1));

const candyStore = {
candies: [
{
name: "mint gum",
id: "as12f",
price: 2,
amount: 2
},
{
name: "twix",
id: "5hd7y",
price: 5,
amount: 4
},
],
cashRegister: 200
}

function getCandy(candyStore, id){

    const candy= candyStore.candies.find(c=>c.id===id);
    return candy;
}

console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id){

    const candy= candyStore.candies.find(c=>c.id===id);
    const price=candy.price;
    return price;

}

console.log(getPrice(candyStore, "5hd7y"));


function addCandy(candyStore, id, name, price){
    
    candyStore.candies.push({name,id,price, amount:1});

}

addCandy(candyStore, "1515", "bamba","2");
console.log(candyStore);


function buy(candyStore, id){
    const candy=getCandy(candyStore,id);
    if(candy.amount>0){
        const price=getPrice(candyStore, id);
        candyStore.cashRegister+=price;
        candy.amount-=1;
    }
    else{
        console.log("no candies left");
    }
}

buy(candyStore,"5hd7y");

console.log(candyStore);
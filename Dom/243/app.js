function Pokemons(pokeList){
    this.pokeList = pokeList;
    }


Pokemons.prototype.newFilter=function(fun){
    const filteredArr=[];
    
    
        for(let k of Object.keys(this.pokeList)){
            for(let i of Object.keys(this.pokeList[k])){

                if(fun(this.pokeList[k][i])){
                    
                  filteredArr.push(this.pokeList[k]);
                  
                }
            }
        }
       

    return filteredArr;

    }
Pokemons.prototype.newFind=function(fun){
    const filteredArr=[];
    let found =false;
    
        for(let k of Object.keys(this.pokeList)){
            for(let i of Object.keys(this.pokeList[k])){

                if(fun(this.pokeList[k][i]) && found===false){
                    
                  filteredArr.push(this.pokeList[k]);
                  found=true;
                }
            }
        }
       

    return filteredArr;

    }



const myPok=new Pokemons([{ name:'pika', type: 'elec' }, { name:'charmandar', type: 'fire' }, { name:'raitchu', type: 'elec' }]);

console.log('=================================');
// console.log(myPok.newFilt(er('elec'));
console.log(myPok.newFilter((k)=>k==='elec'));
console.log(myPok.newFind((k)=>k==='elec'));
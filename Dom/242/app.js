function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

const pikatchu=new Pokemon('pikatchu', 'electric', ['elec','punch']);
const charmandar=new Pokemon('charmandar', 'fire', ['fireAttach','tail']);
const squirel=new Pokemon('squirel', 'water', ['puching','waterAttach']);


Pokemon.prototype.callPokemon=function(){
    console.log(`I call you, ${(this.name)}`);
}

Pokemon.prototype.attack=function(num){
    console.log(`${(this.name)} used ${(this.attackList[num])}`);
}


pikatchu.callPokemon();
pikatchu.attack(0);
console.log('==========================');
charmandar.callPokemon();
charmandar.attack(1);
console.log('==========================');
squirel.callPokemon();
squirel.attack(0);
console.log('==========================');


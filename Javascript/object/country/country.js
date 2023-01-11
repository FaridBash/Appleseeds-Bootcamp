
const myCountry={
    'country':'Finland',
    'capital':'Helsinki',
    'language':'Finnish',
    'population':'6 million people',
    'neihbours':['sweden','norway','estonia']
}

myCountry.describe = function () {
    console.log(this.country+" has "+this.population+", their mother tongue is "+this.language+", they have "+this.neihbours.length+
    " countries and a Capital called "+this.capital);
};


console.log(myCountry.describe());

myCountry.isIsland=function(){
    const len=myCountry.neihbours.length;
    // console.log(len);
    return len>0 ? false : true ;
}

console.log(myCountry.isIsland());
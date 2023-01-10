
const population=[5000, 5511, 1111, 2222];


 function percentageOfWorld1(p){
        const population=((p/7900)*100).toFixed(2) +("%");
        return population;
    }


function populationPercentages(p){
    let percentages=[];

    for (let i = 0; i < p.length; i++) {
        let per=percentageOfWorld1(p[i]);
       percentages.push(per);
        // console.log(percentages);
    }

    return percentages;
}

console.log(populationPercentages(population));

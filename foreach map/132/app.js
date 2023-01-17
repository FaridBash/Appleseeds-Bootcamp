const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];


const desc=foods.sort((a, b) => {
    return a.toLowerCase() < b.toLowerCase()? 1: -1
  });

console.log(desc);

const asc=foods.sort((a, b) => {
    return a.toLowerCase() > b.toLowerCase()? 1: -1
  });

  console.log(asc);


  console.log("==========b========");


  const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];
    
    const uDesc=foods.sort((a, b) => {
      return a.toLowerCase() < b.toLowerCase()? 1: -1
    });

    console.log(uDesc);
    
    const uAsc=foods.sort((a, b) => {
      return a.toLowerCase() > b.toLowerCase()? 1: -1
    });
    console.log(uAsc);

    console.log("==========longest===========");

    const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];

const long=words.sort((a, b) => {
  return a.length < b.length? 1: -1
});
console.log(long);


const listOfNeighbours = [
["Canada", "Mexico"],
["Spain"],
["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {

    if(!Array.isArray(listOfNeighbours[i])){
        console.log('Neighbour: '+listOfNeighbours[i]);
    }

    else if(Array.isArray(listOfNeighbours[i])){
        
        // myArr=listOfNeighbours[i];
        for (let j = 0; j < listOfNeighbours[i].length; j++) {
            console.log('Neighbour: '+listOfNeighbours[i][j]);
        }
    }
}
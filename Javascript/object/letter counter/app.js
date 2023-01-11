
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];


function letterCounter(arr){

    const letters={};

    for(let i=0; i<arr.length; i++){
        
        let word=arr[i].toLowerCase();

        for (let j = 0; j < word.length; j++) {
            if(letters[word[j]]===undefined){
                letters[word[j]]=1;
            }
            else{
                letters[word[j]]+=1;
            }
            
    }

    
}
return letters;
}

console.log(letterCounter(array));
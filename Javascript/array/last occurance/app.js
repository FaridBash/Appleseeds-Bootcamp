
const string = "The more you know, the more you know that you don't know ";


function lastYou(myStr){
    let foundYou=false;
    let lastIndex=-1;
    let tempStr='';
    let counter=0;
    let words=myStr.split('');
    let newArr=[];

    for (let i = 0; i < words.length; i++) {
        
        if(words[i]!=' '){
            tempStr+=words[i];
        }

        else if(words[i]===' '){
            newArr.push(tempStr);
            newArr.push(' ');
            tempStr='';
        }
        
    }
    
    for (let i=0; i<newArr.length; i++){

        for(let j=0; j<newArr[i].length; j++){
            counter++;
            if(newArr[i]==='you'){
                lastIndex=counter-3;
            }
        }
    }
        return lastIndex;
    
    }


console.log(lastYou(string));
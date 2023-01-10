

function country_to_live_in(language, isIsland, population,country){


    if(language==='english'){

        if(population<50){

            if(isIsland===false){

                console.log('You Should live in '+ country);
                return;
            }
        }
    }
    console.log(country+" does not meet your cretieria");
    

}

country_to_live_in('english',false,50,'Finland');

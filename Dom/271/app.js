


function myFunction(num){

    return new Promise((resolved, rejected)=>{
        if(num>=10){
            resolved();
        }
        else if(num<10){
            rejected();
        }
    });

}
const num=15;
myFunction(num)
.then(()=>{
    console.log('Num is 10 or greater');
})
.catch(()=>{
    console.log('Num is less than 10');
});

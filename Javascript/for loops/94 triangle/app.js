

function steps(N){
    let sym='';
    for (let i = 1; i <=N; i++) {
        

        for (let j = i; j >0; j--) {
            sym+='#';
            
            
        }
        console.log(sym);
        sym='';
    }

}

console.log(steps(5));
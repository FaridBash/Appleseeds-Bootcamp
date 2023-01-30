
const table=document.getElementById('main-table');

// table.style.border='1px solid purple';
// table.style.display='flex';
// table.style.flexDirection='column';
// table.style.padding='0px';
table.style.borderCollapse='collapse';


for (let i = 1; i <= 10; i++){

    const row=document.createElement('tr')
    table.appendChild(row);
    const th=document.createElement('th');
    row.appendChild(th);
    th.innerText=i;
    if(i===1){
        th.innerText="X";
    }
    

    for (let j = 2; j <=20; j++) {
        if(i===1){
            const th=document.createElement('th');
            row.appendChild(th);
            th.innerText=j;
            th.style.border='1px solid purple';
        }
        else if(i>1){
            const cell=document.createElement('td')
            row.appendChild(cell);
            cell.innerText=i*j;
            // cell.style.border='1px solid #333';
            cell.style.margin=0;
            cell.style.padding="5px";
        }

    }


}


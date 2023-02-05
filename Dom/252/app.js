
const person={
    title: 'Farid',
    printName: function(){
        console.log(this.title);
    },
    printAfter:function(){
        
        setTimeout(this.printName.bind(person),3000);
        // console.log(this.printName());
    }
}


person.printAfter();
// person.printAfter();
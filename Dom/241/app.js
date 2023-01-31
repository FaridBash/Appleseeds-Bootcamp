function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }


Square.prototype.isSquare=function(){
    if(this.b-this.a === this.c-this.b && this.c-this.b === this.d-this.c )
        {return true;}
    else
        {return false;}
}


const square1=new Square(2,4,6,8);


console.log(square1.isSquare());
/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions
function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}

// answer

const welcomeE=()=>"'Welcome to Appleseeds Bootcamp!'";
//========================================================

function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}

//answer
const powerE=(a)=> Math.pow(a,2);
//========================================================


function add(a, b = 5) {
let myNumber = a;
let sum = myNumber + b;
return sum;
}
//answer
const addE=(a,b=5)=>a+b;
//========================================================


// From function expressions to function declarations
const hello = () => "Hello!";

//answer
function hello(){
    let myVar="Hello!";
    return myVar;
}
//========================================================

const squareRoot = a => Math.sqrt(a);

//answer

function squareRoot(a){
    let ans=Math.sqrt(a);

    return ans;
}

//========================================================
const randomNumbers = (a, b) => Math.random() * (a - b) +
b;

//answer

function randomNumbers(a, b){
    let myRand=Math.random()*(a-b)+b;

    return myRand;
}

//========================================================

const library = [
{
author: "Bill Gates",
title: "The Road Ahead",
readingStatus: true
},
{
author: "Steve Jobs",
title: "Walter Isaacson",
readingStatus: true
},
{
author: "Suzanne Collins",
title: "Mockingjay: The Final Book of The Hunger Games",
readingStatus: false
}
];

function myFunction(arr){

    const readable=arr.filter(n=>n.readingStatus===true);
    console.log("Books thatyou can read:");
    readable.forEach(element => {
        console.log('Book name: '+element.title);
        console.log('Book author: '+element.author);
        console.log('reading status: '+element.readingStatus);
        console.log('=============================');
    });
    // return readable;

}

myFunction(library);
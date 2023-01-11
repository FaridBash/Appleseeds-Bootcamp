

const book1 ={
    name:'first book',
    author:'first',
    year:'2023'
}
const book2 ={
    name:'second book',
    author:'second',
    year:'2024'
}

const bookUtils={}
bookUtils.getFirstPublished=function(firstbook,secondbook){
    return firstbook.year<secondbook.year ? firstbook : secondbook;
}

console.log(bookUtils.getFirstPublished(book1,book2));

bookUtils.setNewEdition=function(book, editionYear){
    
    console.log(book1.latestEdition);
    console.log(editionYear);
    if(book.latestEdition!= 'undefined'){
        book.latestEdition < editionYear ? book.latestEdition =editionYear : book.editionYear=editionYear;
    }
    else if(book.latestEdition=== 'undefined'){
        book.latestEdition= editionYear;
    }
}

// bookUtils.setNewEdition(book1, '2026');
// console.log(book1);
// bookUtils.setNewEdition(book1, '2025');
// console.log(book1);
bookUtils.setNewEdition(book1, '2027');
console.log(book1);


bookUtils.setLanguage=function(book, lang){
    book.language=lang;
}
bookUtils.setTranslator=function(book, lang ,trans){
    book.translation={
        'language': lang,
        'translator': trans
    }
}

bookUtils.setTranslator(book1,"french","farid");
console.log(book1);


bookUtils.setPublisher=function(book, name, location){
    book.publisher={
        'name':name,
        'location':location
    }
}

bookUtils.setPublisher(book1, 'udemy' , 'jerusalem');
console.log(book1);

bookUtils.isSamePublisher =function(booka, bookb){
   
    for (let key in booka.publisher){
        if(booka.publisher.key===bookb.publisher.key){
            if(booka.publisher[key]===bookb.publisher[key]){

            }
            else{
                return false
            }
        }
    }
    return true;
}


// bookUtils.setPublisher(book2, 'udemy' , 'jerusalem');
// console.log(book1.publisher);
// console.log(book2.publisher);
// console.log(bookUtils.isSamePublisher(book1,book2));
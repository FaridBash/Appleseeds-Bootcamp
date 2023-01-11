

const book={
    'Book name':'JS Tutorial',
    'Author':'Yishai',
    'Pages':'500',
    'P year':'2023'
}


function getBook(booka){
    console.log(`The book ` +booka['Book name']+` was written by ` +booka.Author+` in the year `+booka['P year']);
}

getBook(book);
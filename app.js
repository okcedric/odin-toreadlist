function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'read' : "not read yet";  
}

Book.prototype.info = function (){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
}

let theHobbit =  new Book('The Hobbit',"J.R.R. Tolkien",295,false);
console.log(theHobbit);


let myLibrary = [];

function addBookToLibrary(title,author,pages,read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.shift(newBook);
    return newBook.info();
}

function displayBooks(){
    
}


//DOM
let formOverlay = document.querySelector('.overlay');
let addBookButton = document.querySelector('header button#add-book'); 
let closeOverlayButton = document.querySelector('#close');

function toggleFormOverlay(){
    formOverlay.classList.toggle('show');
}


addBookButton.addEventListener('click',toggleFormOverlay);
closeOverlayButton.addEventListener('click',toggleFormOverlay);


//SCRIPT
theHobbit.info();
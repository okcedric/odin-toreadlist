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

let bujo = new Book('The Bullet Journal Method',"Ryder Caroll", 134,false);

let greta = new Book('No One Is Too Small to Make a Difference', 'Greta Thunberg', 80,false);


let myLibrary = [theHobbit,bujo,greta];
let libraryContainer = document.querySelector('.library');
let submit = document.querySelector('#enter');

function addBookToLibrary() {
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');
    


    let newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.unshift(newBook);
    console.table(newBook);
    displayBooks(myLibrary);
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;

}

function displayBooks(array){
    console.log(array);
    libraryContainer.innerHTML = "";

    array.forEach(book => {
        book.info();
        let card = document.createElement('div');
        card.classList.add('card');
        let read = document.createElement('div');
        read.classList.add('read');
        read.textContent= book.read;
        let title = document.createElement('h2');
        title.classList.add('title');
        title.textContent= book.title; 
        let author = document.createElement('div');
        author.classList.add('author');
        author.textContent= book.author;
        let pages= document.createElement('div');
        pages.classList.add('pages');
        pages.textContent = `${book.pages}p.`
        libraryContainer.appendChild(card);
        card.appendChild(read);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);

        
    });


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
displayBooks(myLibrary);
function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'read' : "not read yet";  
}

Book.prototype.info = function (){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
}

function remove(card) {
    let bookTitle = card.querySelector('.title').textContent;
    let i = 0
    myLibrary.forEach((book)=> {
    
        if(bookTitle == book.title){

            myLibrary.splice(i,1);
            console.log(myLibrary);
            displayBooks(myLibrary);
        }
        i++;
    });
}




let theHobbit =  new Book('The Hobbit',"J.R.R. Tolkien",295,false);
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
    displayBooks(myLibrary);
    toggleFormOverlay();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
      
}

function displayBooks(array){
    libraryContainer.innerHTML = "";
    array.forEach(book => {
        book.info();
        let card = document.createElement('div');
        card.classList.add('card');
        let close = document.createElement('button');
        close.classList.add('remove');
        close.textContent = "DELETE";
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
        pages.textContent = `${book.pages}p`
        let div = document.createElement('div');
        let buttonRack = document.createElement('div');
        buttonRack.classList.add('button-rack');
        libraryContainer.appendChild(card);
        div.appendChild(author);    
        div.appendChild(title);
        card.appendChild(pages);
        card.appendChild(div);
        buttonRack.appendChild(read);
        buttonRack.appendChild(close);
        card.appendChild(buttonRack);
        
        removeButtons = document.querySelectorAll('.remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                let card = button.parentElement;
                remove(card);
            })
        })
    });
}

//DOM
let formOverlay = document.querySelector('.overlay');
let addBookButton = document.querySelector('header button#add-book'); 
let closeOverlayButton = document.querySelector('#close');
let removeButtons = document.querySelectorAll('.remove');

function toggleFormOverlay(){
    formOverlay.classList.toggle('show');
}


//SCRIPT
displayBooks(myLibrary);
addBookButton.addEventListener('click',toggleFormOverlay);
closeOverlayButton.addEventListener('click',toggleFormOverlay);

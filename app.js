function Book(title,author,pages,isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead ? 'read' : "not read yet";  
}

Book.prototype.info = function (){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
}

Book.prototype.toggleRead = function(){
    this.read == 'read' ? this.read = "not read yet" : this.read = "read";
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
    let i= 0;
    array.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id',i);
        i++;
        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = "DELETE";
        let read = document.createElement('button');
        read.classList.add('isRead');
        read.textContent= book.read;
        (read.textContent == 'read') ? read.classList.add('read') : read.classList.add('notYet')
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
        buttonRack.appendChild(removeButton);
        card.appendChild(buttonRack);
        removeButton.addEventListener('click', () => {
            let card = removeButton.parentElement.parentElement;
            remove(card);
        });
        read.addEventListener('click',()=> {
            let card = read.parentElement.parentElement;
            let id = card.getAttribute('data-id');
            myLibrary[id].toggleRead();

            displayBooks(myLibrary);
        })
        
    });
}
function remove(card) {
    let id = card.getAttribute('data-id');
    console.log(myLibrary[id]);
    console.log(id);
    myLibrary.splice(id, 1);
    displayBooks(myLibrary);
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
const library = []

const dialog = document.querySelector("dialog")
const exitButton = document.querySelector("dialog button")
const newBookButton = document.querySelector("dialog + button")

newBookButton.addEventListener("click", () => {
    dialog.showModal();
})

exitButton.addEventListener("click", () => {
    dialog.close();
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID;
}

function addBooktoLibrary(newBook){
    library.push(newBook);
}


const book1 = new Book("Harry Potter", "JK Rowling", 220, false)
const book2 = new Book("Black Swan", "Your Mother", 254, true)
addBooktoLibrary(book1);
addBooktoLibrary(book2);
console.log(library)
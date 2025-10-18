const library = []

const dialog = document.querySelector("dialog")
const exitButton = document.getElementById("exitButton")
const newBookButton = document.getElementById("newBookButton")

newBookButton.addEventListener("click", () => {
    dialog.showModal()
})

exitButton.addEventListener("click", () => {
    dialog.close()
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.addBooktoLibrary = function(newBook){
    library.push(newBook)
}

const book1 = new Book("Harry Potter", "JK Rowling", 220, false)
const book2 = new Book("Black Swan", "Your Mother", 254, true)
book1.addBooktoLibrary(book1);
book2.addBooktoLibrary(book2);
console.log(library)
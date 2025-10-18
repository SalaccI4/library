const library = []

const tableBody = document.querySelector("table tbody")
const form = document.querySelector("form")
const dialog = document.querySelector("dialog")
const exitButton = document.getElementById("exitButton")
const submitButton = document.getElementById("submitButton")
const newBookButton = document.getElementById("newBookButton")

const titleInput = document.querySelector('input[name="title"]')
const authorInput = document.querySelector('input[name="author"]')
const pagesInput = document.querySelector('input[name="pages"]')
const readInput = document.querySelector('input[name="read"]')

newBookButton.addEventListener("click", () => {
    dialog.showModal()
})

exitButton.addEventListener("click", (e) => {
    e.preventDefault()
    dialog.close()
    dialog.querySelector("form").reset()
})

submitButton.addEventListener("click", (e) => {
    if (form.checkValidity()){
        e.preventDefault()
        dialog.close()
        const finalBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)
        finalBook.addBooktoLibrary(finalBook)
        console.log(library)
        form.reset()
    }
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

Book.prototype.addBooktoTable = function(newBook) {
    const tableRow = tableBody.insertRow(-1)
    const firstCell = tableRow.insertCell(0)
    const secondCell = tableRow.insertCell(1)
    const thirdCell = tableRow.insertCell(2)
    const fourthCell = tableRow.insertCell(3)

    firstCell.innerHTML = newBook.title
    secondCell.innerHTML = newBook.author
    thirdCell.innerHTML = newBook.pages
    fourthCell.innerHTML = newBook.read
}

const book1 = new Book("Harry Potter", "JK Rowling", 220, false)
const book2 = new Book("Black Swan", "Your Mother", 254, true)
book1.addBooktoLibrary(book1);
book2.addBooktoLibrary(book2);
book1.addBooktoTable(book1);
book2.addBooktoTable(book2);
console.log(library)
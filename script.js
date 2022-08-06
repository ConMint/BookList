function addBook(title,author,pages,readstatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readstatus = readstatus
    
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${readstatus}`)
    }
}

const book1 = new addBook('The Hobbit','Tolkien',295, 'not read yet')

console.log(book1.info());
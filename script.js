let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    pages: '310',
    readstatus: false,
  },

  {
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    pages: '296',
    readstatus: true,
  },
];

// Original constructor version
// function Book(title, author, pages, readstatus) {
//      this.title = title
//      this.author = author
//      this.pages = pages
//      this.readstatus = readstatus
// }

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  openTheForm();
});

function addBookToLibrary() {
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  let readstatus;
  if (form.readstatus.value === 'yes') {
    readstatus = true;
  } else {
    readstatus = false;
  }
  // const readstatus = form.readstatus.value;

  let bookToAdd = new Book(title, author, pages, readstatus);
  bookToAdd.prototype = Object.create(Book.prototype);

  myLibrary.push(bookToAdd);
  render();
  form.reset();
  closeTheForm();

  return false;
}

function createCards(item) {
  const container = document.getElementById('main');

  const card = document.createElement('div');
  card.classList.add('book');
  card.setAttribute('id', myLibrary.indexOf(item));

  const titleText = document.createElement('div');
  titleText.textContent = `"${item.title}"`;
  titleText.classList.add('title');
  card.appendChild(titleText);

  const authorText = document.createElement('div');
  authorText.textContent = item.author;
  authorText.classList.add('author');
  card.appendChild(authorText);

  const pagesText = document.createElement('div');
  pagesText.textContent = `${item.pages} pages`;
  pagesText.classList.add('pages');
  card.appendChild(pagesText);

  const readText = document.createElement('div');

  readText.textContent = item.readstatus;
  readText.classList.add('readstatus');
  // card.appendChild(readText);

  const readBtn = document.createElement('button');
  readBtn.setAttribute('id', 'readBtn');
  card.appendChild(readBtn);
  if (item.readstatus === false) {
    readText.textContent = 'Not read';
    readBtn.textContent = 'Not Read';
    readBtn.style.backgroundColor = '#e04f63';
  } else {
    readText.textContent = 'Read';
    readBtn.textContent = 'Read';
    readBtn.style.backgroundColor = '#63da63';
  }

  readBtn.addEventListener('click', () => {
    item.readstatus = !item.readstatus;
    render();
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('id', 'removeBtn');
  card.appendChild(removeBtn);

  container.appendChild(card);

  removeBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    render();
  });
}

function render() {
  const container = document.getElementById('main');
  const books = document.querySelectorAll('.book');
  books.forEach((book) => container.removeChild(book));
  for (i = 0; i < myLibrary.length; i++) {
    createCards(myLibrary[i]);
  }
}

render();

// FORM BELOW HERE

function openTheForm() {
  document.getElementById('popupForm').style.display = 'block';
  document.getElementById('page-mask').style.display = 'block';
  document.getElementById('newBookPop').style.display = 'block';
}

function closeTheForm() {
  document.getElementById('popupForm').style.display = 'none';
  document.getElementById('page-mask').style.display = 'none';
  document.getElementById('newBookPop').style.display = 'none';
}

const titleForm = document.getElementById('titleForm');
titleForm.addEventListener('input', () => {
  titleForm.setCustomValidity('');
  titleForm.checkValidity();
});
const authorForm = document.getElementById('authorForm');
authorForm.addEventListener('input', () => {
  authorForm.setCustomValidity('');
  authorForm.checkValidity();
});
const pagesForm = document.getElementById('pagesForm');
pagesForm.addEventListener('input', () => {
  pagesForm.setCustomValidity('');
  pagesForm.checkValidity();
});

titleForm.addEventListener('invalid', () => {
  titleForm.setCustomValidity('Please enter the title of the book.');
});
authorForm.addEventListener('invalid', () => {
  authorForm.setCustomValidity('Please enter the name of the author.');
});
pagesForm.addEventListener('invalid', () => {
  pagesForm.setCustomValidity('Enter the number of pages. Must be a number');
});

// CLASS VERSION //
class Book {
  constructor(title, author, pages, readstatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstatus = readstatus;
  }
}

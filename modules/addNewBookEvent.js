import MyBook from './MyBook.js';

const addNewBookEvent = () => {
  console.log('Hello World');
  const newBook = document.querySelector('#newBook');
  newBook.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.elements[0].value;
    const author = event.target.elements[1].value;
    const myNewBook = new MyBook(title, author);
    myNewBook.addBookToDom();
    event.target.elements[0].value = '';
    event.target.elements[1].value = '';
  });
};

export default addNewBookEvent;
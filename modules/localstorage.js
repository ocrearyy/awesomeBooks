import updateBookList from './updateBookList.js';

export default document.addEventListener('DOMContentLoaded', () => {
  // find and update local storage elements
  if (!localStorage.getItem('bookCollection')) {
    localStorage.setItem('bookCollection', JSON.stringify([]));
  } else {
    updateBookList();
  }
});
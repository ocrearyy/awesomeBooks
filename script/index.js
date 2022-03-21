let nav = null;
let listOfBooks = null;
const emptyBookListPlaceHolder = '<p id=\'book-list-empty\'> Your Books list is empty, you can <a href=\'#new-book-section\' onclick=\'AddSwapEvenForLinks(this)\'>click here</a> to add new</p>';

// dateDisplay import
import displayTime  from "../modules/dateDisplay.js" 
displayTime();

// update any section with a given HTML
import { updateSectionWithInnerHtml } from "../modules/updateSectionWithInnerHtml.js";

//every book is Instance of a book class;
import MyBook from "../modules/MyBook.js";

// update book list
import { updateBookList } from "../modules/updateBookList.js";

// add new book
import { addNewBookEvent } from "../modules/addNewBookEvent.js";

// swap sections
import { swapSection } from "../modules/swapSection.js";

// associate event for the nav links and other elements if needed
function AddSwapEvenForLinks(NavLink) {
  NavLink.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionName = NavLink.getAttribute('href').replace('#', '');
    swapSection(document.getElementById(sectionName));
  });
}

// as as document becomes ready the following activity get executed
document.addEventListener('DOMContentLoaded', () => {
  // find and update local storage elements
  if (!localStorage.getItem('bookCollection')) {
    localStorage.setItem('bookCollection', JSON.stringify([]));
  } else {
    updateBookList();
  }

  // Initialize document objects
  nav = document.getElementById('navbar-container');
  listOfBooks = document.getElementById('list-of-books');
  let storeBooks = null;
  storeBooks = document.querySelector('#storeBooks');
  const navLinks = nav.querySelectorAll('a');
  listOfBooks.classList.add('active');
  if (storeBooks.childElementCount === 0) {
    updateSectionWithInnerHtml(storeBooks, emptyBookListPlaceHolder);
  }
  // associate event for the add new book form
  addNewBookEvent();

  for (let i = 0; i < navLinks.length; i += 1) {
    const link = navLinks[i];
    AddSwapEvenForLinks(link);
  }
});


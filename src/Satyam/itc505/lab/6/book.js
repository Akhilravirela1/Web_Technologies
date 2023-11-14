document.addEventListener('DOMContentLoaded', function () {
  const bookList = document.getElementById('book-list');
  const addBookButton = document.getElementById('add-book-button');
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  function addBook(event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title && author) {
      const listItem = document.createElement('li');
      listItem.textContent = `${title} by ${author}`;
      bookList.appendChild(listItem);
      titleInput.value = '';
      authorInput.value = '';
    } else {
      alert('Please enter both the title and author of the book.');
    }
  }
  addBookButton.addEventListener('click', addBook);
});
